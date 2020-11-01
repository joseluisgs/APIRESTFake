const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')
const router = jsonServer.router(path.join(__dirname, '/bd/db.json'))

// const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 6969;
server.listen(port, () => {
  console.log(`⚑ Servidor JSON funcionando ✓ -> http://localhost:${port}`);
  console.log(`⚑ Fake API REST por joseluisgs ✓ -> http://github.com/joseluisgs`);
})
