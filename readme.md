# build image of docker

## rebuild docker container
$ docker-compose up --build -d

ex: docker build . -t <your username>/node-web-app
docker build . -t mengty/node-web-app


# Run the image
docker run -p 49160:8080 -d <your username>/node-web-app


# Print the output of your app

## Get container ID
$ docker ps

## Print app output
$ docker logs <container id>

# Enter the container
$ docker exec -it <container id> /bin/bash

# using curl
install crul : sudo apt-get install curl

$ curl -i localhost:49160

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Mon, 13 Nov 2017 20:53:59 GMT
Connection: keep-alive

Hello world

## Example
Running on http://localhost:49160

ref: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/#run-the-image