FROM node:18

WORKDIR /usr/src/app

# when instance is launched it is in the WORKDIR

COPY ./.output .

EXPOSE 3000
CMD node ./server/index.mjs