FROM ngnix

COPY ./ngnix.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html