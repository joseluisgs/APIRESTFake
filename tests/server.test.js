/* eslint-disable no-undef */
import server from '../src/server';

// Testeando Seervidor
describe('Batería de Test Servidor', () => {
  let servicio;
  beforeAll(async () => {
    servicio = server.start();
  });

  // Al terminar lo cerramos. Cambio afterEach por after
  afterAll(() => {
    servicio.close();
  });
  // Testeamos que el servidor se ha abierto. Este es un test de prueba
  test('El servidor se ha instanciado != null', () => {
    expect(servicio).not.toBeNull();
  });
  test('El servidor se ha definido == defined', () => {
    expect(servicio).toBeDefined();
  });
  test('El servidor escucha en el puerto', () => {
    expect(servicio).toBeDefined();
    expect(servicio).toHaveProperty('_connectionKey');
  });
});
