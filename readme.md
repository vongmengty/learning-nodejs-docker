# build image of docker

ex: docker build . -t <your username>/node-web-app
docker build . -t mengty/node-web-app


# Run the image
docker run -p 49160:8080 -d <your username>/node-web-app


# Print the output of your app

## Get container ID
$ docker ps

## Print app output
$ docker logs <container id>

## Example
Running on http://localhost:49160