# 构建前需要修改 BASE_URL 路径
# 构建dist
npm run build

# 构建image
# -t 是给镜像命名 . 是基于当前目录的Dockerfile来构建镜像
docker build -t wuui-pro:0.0.1 .

# 运行容器

docker container -d run --rm --name pro -p 80:80 wuui-pro:0.0.1
