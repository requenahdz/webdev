#docker build --tag webdev
#docker images
#docker run -it webdev
FROM ubuntu:latest

RUN apt-get update && apt-get install -y git && apt-get autoremove -y

RUN git clone https://github.com/requenahdz/webdev.git
VOLUME ./usr/webdev

WORKDIR /webdev

CMD ["/bin/bash"]