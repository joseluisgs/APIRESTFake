#!/bin/bash
# Este es nuestro primer progrma
echo "✓ Descargando imagen API REST Fake"
docker pull joseluisgs/apirest-fake .
echo "✓ Ejecutando API REST Fake"
docker run -p 6969:6969 -d --name="apirest-fake"  joseluisgs/apirest-fake:latest
echo "⚑ Servidor API REST Fake listo -> http://localhost:6969"