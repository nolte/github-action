FROM node:lts

RUN npm install --global remark-cli remark-validate-links

WORKDIR /src

ENTRYPOINT [ "remark" ]

CMD ["-u","validate-links","."]
