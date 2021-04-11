# Stage 1
FROM node:12-alpine as todo-app
RUN mkdir -p /var/www/todo-app
WORKDIR /var/www/todo-app
#RUN apk add git
#RUN apk --no-cache add openssl wget
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
#RUN npm start

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=todo-app /var/www/todo-app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

