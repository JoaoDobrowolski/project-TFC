FROM node:16.14-alpine
WORKDIR /app-backend
COPY . .
EXPOSE 3001
# COPY package*.json ./
RUN npm install
# RUN npm run build
# ENTRYPOINT [ "npm", "run" ]
# ENTRYPOINT ["npm", "run"]
CMD ["npm", "start"]