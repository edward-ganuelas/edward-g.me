# build stage
FROM node:lts-alpine as build-stage
RUN apk add --no-cache python make g++ build-essential
WORKDIR /
COPY . .
RUN yarn 
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /dist/. /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
