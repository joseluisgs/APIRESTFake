const jsonServer = require('json-server');
const server = jsonServer.create();

// si quieres cambiar el path de tu bd o nombre de fichero json. 
// Lo tengo puesto en la raiz para que sea accesible desde 
// https://my-json-server.typicode.com/joseluisgs/APIRESTFake
// es una BD Limitada, la completa la tienes en el el directorio BD y es la que usa este servidir
const path = require('path');
const router = jsonServer.router(path.join(__dirname, '/bd/db.json'));
//const router = jsonServer.router('db.json') // BD Limitada

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 6969;
server.listen(port, () => {
  console.log(`⚑ Servidor JSON funcionando ✓ -> http://localhost:${port}`);
  console.log(`⚑ Fake API REST por joseluisgs ✓ -> https://github.com/joseluisgs/APIRESTFake`);
})
