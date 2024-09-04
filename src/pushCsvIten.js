import { parse } from "csv-parse"
import fs from "fs"

const url = new URL('../exemple.csv', import.meta.url)

const fileStream = fs.createReadStream(url)

const csvParse = parse({
    delimiter: ',',
    skipEmptyLines: true,
    fromLine: 2
})

async function pushCsvItem() {
    const csv = fileStream.pipe(csvParse)

    for await (const line of csv) {
        const [title, description] = line

        await fetch('http://localhost:3333/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })
    } 
}

pushCsvItem()


