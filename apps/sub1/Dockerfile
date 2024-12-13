# nginx
FROM nginx:1.27.2
# 构建产物
COPY dist /usr/share/nginx/html
# 移除默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 端口
EXPOSE 80
# 启动
CMD ["nginx", "-g", "daemon off;"]