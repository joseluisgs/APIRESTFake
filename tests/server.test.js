/* eslint-disable no-undef */
// Forzamos a modo test, aunque ya lo hemos hecho en el script de package.josn con cross-env NODE_ENV=test
// process.env.NODE_ENV = 'test';
// Cargo las librerías necesarias
import request from 'supertest';
import server from '../src/server';

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

// Testeando Users
describe('Batería de tests de Users', () => {
  let servicio;
  // antes de comenzar, levantamos el servidor, cambo befereEach por before para que se ejecute una vez en todo el test y no por cada prueba
  // Es costoso arrancar y apagar el servidor
  // Recuerda que devuelve una promesa cuando el servidor esté listo
  beforeAll(async () => {
    servicio = await server.start();
  });

  // Al terminar lo cerramos. Cambio afterEach por after
  afterAll(() => {
    servicio.close();
  });
  // Testeamos que el servidor se ha abierto. Este es un test de prueba
  test('El servidor se ha instanciado != null', () => {
    expect(servicio).not.toBeNull();
  });

  // Conjunto de test para GET
  describe('GET: Tests de obtención de usuarios ', () => {
    test('GET: Obtiene todos los usuarios ', async () => {
      const res = await request(servicio).get('/users');
      expect(res.statusCode).toEqual(200);
    });
  });
});
