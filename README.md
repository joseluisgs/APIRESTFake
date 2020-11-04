# API REST Fake

Una Servidor API REST Fake para jugar y consumir

[![APIREST](https://img.shields.io/badge/API-REST-violet)](https://www.bbvaapimarket.com/es/mundo-api/api-rest-que-es-y-cuales-son-sus-ventajas-en-el-desarrollo-de-proyectos/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://hub.docker.com/r/joseluisgs/apirest-fake)
[![Heroku](https://img.shields.io/badge/Heroku-Ready-blueviolet)](https://apirest-fake.herokuapp.com/)
[![NPM](https://img.shields.io/badge/NPM-Ready-red)](https://www.npmjs.com/package/apirestfake)
[![LICENSE](https://img.shields.io/badge/Lisence-MIT-green)](https://github.com/joseluisgs/APIRESTFake/blob/master/LICENSE)
[![JS Code](https://img.shields.io/badge/JS%20Code-ES2019-yellow)](https://www.ecma-international.org/ecma-262)
[![JS Style](https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4)](https://airbnb.io/javascript)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/APIRESTFake)

## Descripción

Fake API REST Server pensanda para jugar, consumir datos, etc.
Podrás hacer GET, POST, PUT, DELETE, PATCH y recibir códigos de respuesta de acuerdo a los valores que hay y con ello comprobar si tu código de tu app front o móvil funciona correctamente.

## Enlaces

- [GitHub](https://github.com/joseluisgs/APIRESTFake)
- [DockerHub](https://hub.docker.com/r/joseluisgs/apirest-fake)
- [Heroku](https://apirest-fake.herokuapp.com/)
- [NPM](https://www.npmjs.com/package/apirestfake)
- [JSON Server](https://my-json-server.typicode.com/joseluisgs/APIRESTFake)

## Funcionamiento

Tienes varias formas de probar esta API REST Fake:

- Usando la URL: https://my-json-server.typicode.com/joseluisgs/APIRESTFake. Podrás hacer las operaciones típicas REST/CRUD sobre varios recursos y obetener los códigos de respuesta. Al ser una Fake API REST estática los datos no cambian, siempre tienes disponible la imagen inicial.

- Usando el despliegue en Heroku, usando la URL: https://apirest-fake.herokuapp.com/ Debes tener en cuenta que como en el caso anterior algunos cambios no sean visible, dado el uso del contenedor en Heroku.

- Usando NodeJS, para ello solo debes descargarte el proyecto de GitHub, debes tener instalado NodeJS. en el directorio db, como db.json tienes a Base de Datos JSON para utilizarla. Esta sí acepta cambios. Puedes colocar como db.json el fichero que quieras para praticar. Una vez bajado el repositorio, puedes iniciar el servidor de una de estas tres maneras:

```bash
$npm start (versón de producción, antes debes hacer $nmp run build)
$npm run dev (versión de desarrollo)
$npm run build y luego $npm start (versión de producción)
$npm run watch (modo observación para ir haciendo cambios en tu código)

⚑ Servidor JSON funcionando ✓ -> http://localhost:6969
⚑ Fake API REST por joseluisgs ✓ -> https://github.com/joseluisgs/APIRESTFake
```

- Si no tienes NodeJS, pero tienes Docker, puedes usar el propio Dockerfile existente o alguno de los scripts sh que existen, puedes constrir tú mismo la imagen o pudes usar la disponible en DockerHub: https://hub.docker.com/r/joseluisgs/apirest-fake.

```bash
$sh apirest-remote-docker.sh o $sh apirest-local-docker.sh

O Puedes decargarla:
$docker pull joseluisgs/apirest-fake
Y ejecutarla:
$docker run -p 6969:6969 -d --name="apirest-fake"  joseluisgs/apirest-fake:latest
```

### Testing

Se ha implemenatdo una serie de test automatizados para comprobar que la API REST funciona correctamente usando [Jest](https://jestjs.io/es-ES/) y [SuperTest](https://github.com/visionmedia/supertest). Para testear puedes hacerlo:

```bash
$npm test (modo una vez todo)
$npm test:cover (análisis de cobertura)
$npm run test:users (test sobre users)
$npm run test:server (test sobre server)
$npm test:watch (modo wath de test. Cuidado porque al cambiar BD entr en bucle al detectar cambios)
```

### Recursos adicionales

- [JSON Server](https://github.com/typicode/json-server)
- [JSON Place Holder](https://jsonplaceholder.typicode.com)
- [My JSON Server](https://my-json-server.typicode.com/)

## Autor

[José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)

[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero [LICENSE](https://github.com/joseluisgs/APIRESTFake/blob/master/LICENSE) para su uso docente y educativo.
