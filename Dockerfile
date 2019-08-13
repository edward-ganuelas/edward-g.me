# build stage
FROM node:lts-alpine as build-stage
WORKDIR /
COPY package*.json ./
RUN yarn 
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
