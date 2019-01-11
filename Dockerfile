FROM node:8

WORKDIR /opt/nmsLog

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start  
