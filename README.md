# API Taks

### POST

API desenvolvida com os modulos nativos do Node.js.
A API consiste em um anotador de tarefas onde é possivel fazer a criação das tasks atrávez da rota ``/tasks`` utilizando o methodo ``POST`` enviando no corpo da requisição ``title`` e ``description``.

### GET

É possivel também fazer alistagem de todas as taks utilizando o metodo ``GET`` na rota ``/tasks``, nessa rota também pode se passar ``query params`` para poder fazer um filtro nas tasks, o parametro se chama ``search``, ele faz a pesquisa tanto pelo titulo quanto pela descrição, veja o exemplo ``/tasks?search=minhatask``.

### PUT

Para fazer a atulização de uma task é possivel fazer o envio dos mesmos dados de cadastro no corpo da requição chamando uma rota ``/taks`` com um id, veja o exemplo ``/tasks/d405cd9c-9a0a-4429-89c4-2ef7adec6ec0``

### PATCH

Também é possivel mover a task para completa onde podemos fazer uma chamada com o methodo ``PATCH`` em uma rota passando o id e ``/complete``, veja o exemplo ``/tasks/d405cd9c-9a0a-4429-89c4-2ef7adec6ec0/complete`` isso colocará uma data no campo created_at.

### Banco de dados

O banco de dados consiste em um unico arquivo ``json`` onde se ele não existir será criado quando a aplicação começar a ser executada

### Frameworks utilizados

- csv-parser(Utilizado para consumir um arquivo csv com stream)

### Como executar o projeto?

Siga os passos abaixo para a instalação do projeto em sua máquina:

1. Instale o [Git](https://git-scm.com/).
2. Instale o [Node.js](https://nodejs.org/en).
3. Clone o repositório do projeto com o comando `git clone https://github.com/Catalendas/API-nodejs-pura.git`.
4. Abra o terminal na pasta do projeto e execute o comando `npm i` para instalar as dependências do projeto.
5. Rode o comando `npm run dev` para executar o projeto em ambiente de desenvolvimento (a API utilizada será a que está em produção).

