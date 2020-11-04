// Librerías
import jsonServer from 'json-server';
import path from 'path';

// si quieres cambiar el path de tu bd o nombre de fichero json.
// Lo tengo puesto en la raiz para que sea accesible desde
// https://my-json-server.typicode.com/joseluisgs/APIRESTFake
// es una BD Limitada, la completa la tienes en el el directorio BD y es la que usa este servidir

const router = jsonServer.router(path.join(__dirname, '/bd/db.json'));
// const router = jsonServer.router('db.json') // BD Limitada

// Middleware por defecto
const middlewares = jsonServer.defaults();

// Configuramos el puerto
const port = process.env.PORT || 6969;

/**
 * Clase servidor
 */
class Server {
  // iniciamos el servidor
  constructor() {
    // Costruimos el servidor
    this.server = jsonServer.create();
    this.server.use(middlewares);
    this.server.use(router);
  }

  // Método de inicio
  start() {
    this.instancia = this.server.listen(port, () => {
      if (process.env.NODE_ENV !== 'test') {
        console.log(`⚑ Servidor JSON funcionando ✓ -> http://localhost:${port}`);
        console.log('⚑ Fake API REST por joseluisgs ✓ -> https://github.com/joseluisgs/APIRESTFake');
      }
    });
    return this.instancia; // Devolvemos la instancia del servidor
  }

  // Cierra el servidor
  close() {
    // Desconectamos el socket server
    this.instancia.close();
    if (process.env.NODE_ENV !== 'test') {
      console.log('▣  Servidor parado');
    }
  }
}

/**
 * Devuelve la instancia de conexión siempre la misma, simulamos un singleton
 */
const server = new Server();

// Exportamos la variable por li la queremos usar en otros módulos, por ejemplo los test
export default server;

// Si ningun fichero está haciendo un import y ejecutando ya el servidor, lo lanzamos nosotros
if (!module.main) {
  server.start();
}
