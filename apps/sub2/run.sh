docker run --name microfe-sub2 -p 3002:80 -d -v ./conf/nginx.conf:/etc/nginx/conf.d/nginx.conf microfe-sub2:latest