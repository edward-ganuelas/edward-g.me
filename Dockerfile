# build stage
FROM node:lts-alpine as build-stage
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
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
