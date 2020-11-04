/* eslint-disable no-undef */
// Forzamos a modo test, aunque ya lo hemos hecho en el script de package.josn con cross-env NODE_ENV=test
// process.env.NODE_ENV = 'test';
// Cargo las librerías necesarias
import request from 'supertest';
import server from '../src/server';

// Variable o id del usuario para trabajar
let userTestID;

// Testeando Users
describe('Batería de tests de Users', () => {
  let servicio;
  // antes de comenzar, levantamos el servidor, cambo befereEach por before para que se ejecute una vez en todo el test y no por cada prueba
  // Es costoso arrancar y apagar el servidor
  // Recuerda que devuelve una promesa cuando el servidor esté listo
  beforeAll(async () => {
    servicio = server.start();
  });

  // Al terminar lo cerramos. Cambio afterEach por after
  afterAll(() => {
    servicio.close();
  });
  // Testeamos que el servidor se ha abierto. Este es un test de prueba
  test('El servidor se ha instanciado', () => {
    expect(servicio).not.toBeNull();
    expect(servicio).toBeDefined();
    expect(servicio).toHaveProperty('_connectionKey');
  });

  // Conjunto de test para GET
  describe('GET: Tests de obtención de usuarios ', () => {
    test('GET All: Obtiene todos los usuarios ', async () => {
      const res = await request(servicio).get('/users');
      expect(res.statusCode).toEqual(200);
    });
    test('GET by ID: Obtiene el usuario con un ID', async () => {
      const userID = 1;
      const res = await request(servicio).get(`/users/${userID}`);
      expect(res.statusCode).toEqual(200);
      // Es el id que queremos
      expect(res.body.id).toEqual(userID);
      // Chequeamos propiedades
      expect(res.body).toHaveProperty('name');
      expect(res.body).toHaveProperty('username');
    });
    test('GET by ID: NO Obtiene el usuario ya que no existe ID', async () => {
      const userID = 'pepe';
      const res = await request(servicio).get(`/users/${userID}`);
      expect(res.statusCode).toEqual(404);
    });
  });
  describe('POST: Tests de insercción de usuarios ', () => {
    test('POST: Inserta un usuario ', async () => {
      const newUser = {
        name: 'Usuario Inserccion',
        username: 'usertest',
        email: 'insert@insert.test',
        avatar: 'https://eu.ui-avatars.com/api/?name=test&background=random',
      };
      const res = await request(servicio).post('/users').send(newUser);
      expect(res.statusCode).toEqual(201);
      // Chequeamos propiedades con valores
      expect(res.body).toHaveProperty('name', newUser.name);
      expect(res.body).toHaveProperty('username', newUser.username);
      userTestID = res.body.id; // Guardamos el ID
    });
  });
  describe('PUT: Tests de actualización de usuarios ', () => {
    test('PUT: Actualiza un usuario por ID', async () => {
      const updateUser = {
        name: 'Usuario Actualización',
        username: 'usertest',
        email: 'update@update.test',
        avatar: 'https://eu.ui-avatars.com/api/?name=test&background=random',
      };
      const res = await request(servicio).put(`/users/${userTestID}`).send(updateUser);
      expect(res.statusCode).toEqual(200);
      // Chequeamos propiedades y valores
      expect(res.body).toHaveProperty('name', updateUser.name);
      expect(res.body).toHaveProperty('username', updateUser.username);
    });
    test('PUT: NO Actualiza el usuario ya que no existe ID', async () => {
      const userID = 'pepe';
      const updateUser = {
        name: 'Usuario Actualización',
        username: 'usertest',
        email: 'update@update.test',
        avatar: 'https://eu.ui-avatars.com/api/?name=test&background=random',
      };
      const res = (await request(servicio).put(`/users/${userID}`).send(updateUser));
      expect(res.statusCode).toEqual(404);
      // Chequeamos propiedades y valores
    });
  });
  describe('DELETE: Tests de borrado de usuarios ', () => {
    test('DELETE: Elimina un usuario por ID', async () => {
      const res = await request(servicio).delete(`/users/${userTestID}`);
      expect(res.statusCode).toEqual(200);
    });
    test('DELETE: NO Elimina el usuario ya que no existe ID', async () => {
      const userID = 'pepe';
      const res = await request(servicio).delete(`/users/${userID}`);
      expect(res.statusCode).toEqual(404);
    });
  });
});
