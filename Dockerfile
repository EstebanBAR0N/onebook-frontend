# dev
FROM node:16-alpine3.15

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL ${REACT_APP_API_URL}

CMD ["npm", "start"]