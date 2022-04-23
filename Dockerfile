# Stage 1
FROM 725261462265.dkr.ecr.us-east-1.amazonaws.com/node as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
# Stage 2
FROM 725261462265.dkr.ecr.us-east-1.amazonaws.com/nginx
COPY --from=build-step /app/dist /usr/share/nginx/html
EXPOSE 8090