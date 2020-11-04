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
    test('GET All: Obtiene todos los usuarios ', async () => {
      const res = await request(servicio).get('/users');
      expect(res.statusCode).toEqual(200);
    });
    test('GET by ID: Obtiene el usuario con un ID', async () => {
      const userId = 1;
      const res = await request(servicio).get(`/users/${userId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.id).toEqual(userId);
    });
    test('GET by ID: NO Obtiene el usuario con un ID', async () => {
      const userId = "pepe";
      const res = await request(servicio).get(`/users/${userId}`);
      expect(res.statusCode).toEqual(404);
    });
  });
});
