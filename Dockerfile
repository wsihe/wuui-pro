FROM hub.c.163.com/library/nginx

COPY ./ngnix.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html