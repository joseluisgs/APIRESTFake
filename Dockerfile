FROM node:12-alpine

# Mi directorio de trabajo
WORKDIR /usr/src/app

# Instalo las dependencias, por eso debo compiar los packages
COPY package*.json ./

RUN npm install
# Si tu código es de producción haz..
# RUN npm ci --only=production

# Copiamos el directorio
COPY . .

# Exponemos los puertos
EXPOSE 6969

# Ejecutamos
CMD [ "node", "server.js" ]