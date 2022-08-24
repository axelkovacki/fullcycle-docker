# For Mac's M1 Processor 
# FROM --platform=linux/x86_64 mysql:5.7

FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

COPY schema.sql /docker-entrypoint-initdb.d/
