FROM alpine/helm:3.0.2

COPY build.sh /
RUN chmod +x /build.sh
ENTRYPOINT ["/build.sh"]