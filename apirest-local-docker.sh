#!/bin/bash
# Este es nuestro primer progrma
echo "✓ Construyendo imagen API REST Fake"
docker build -t joseluisgs/apirest-fake .
echo "✓ Ejecutando API REST Fake"
docker run -p 6969:6969 -d --name="apirest-fake"  joseluisgs/apirest-fake
echo "⚑ Servidor API REST Fake listo -> http://localhost:6969"