FROM node:16.14-alpine
WORKDIR /app-frontend
COPY . .
# COPY package* ./
RUN npm install
# RUN npm run build
ENTRYPOINT ["npm", "start"]