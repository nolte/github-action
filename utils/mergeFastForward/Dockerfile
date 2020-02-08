FROM alpine:latest

LABEL "com.github.actions.name"="Automatic Merge Fast Forward "
LABEL "com.github.actions.description"="Automatically rebases PR on '/rebase' comment"
LABEL "com.github.actions.icon"="git-merge-fast-forward"
LABEL "com.github.actions.color"="purple"

RUN apk --no-cache add jq bash curl git git-lfs

WORKDIR /src

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
