# Stage 1
FROM node:12-alpine as uct-dashboard
RUN mkdir -p /var/www/uct-dashboard
WORKDIR /var/www/uct-dashboard
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
COPY --from=uct-dashboard /var/www/uct-dashboard/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]

