docker run --name microfe-sub1 -p 3001:80 -d -v ./conf/nginx.conf:/etc/nginx/conf.d/nginx.conf microfe-sub1:latest