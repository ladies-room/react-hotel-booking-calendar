# minji docker note:
https://docs.google.com/document/d/1t3bAW77KomK5QRDvyYES_tro9_nkmPQ0t4RuJbtVmyc/edit

# docker doc:
https://docker-curriculum.com/#dockerfile

# ?
https://vsupalov.com/debug-docker-container/

# playground:
docker run -d -p 2046:2046 -v  $(pwd):/src/app --name calendar_db calendar:latest

docker run -d reviews sh /Users/tongyu/Desktop/proxy-calendar-tong/Calendar/start.sh


# SQL: (run multible server / db)

docker-compose up -d
docker run MYSQL_ALLOW_EMPTY_PASSWORD=true --name testsql -it mysql:5.7
docker run  --name testsql -it mysql:5.7 MYSQL_ALLOW_EMPTY_PASSWORD=true

# run one file

# 1.
docker build --tag image_calendar .
# 2: docker run -d -p portNumber(host):portNumber(container) -v  $(pwd):/src/app --name reviews reviews:latest
<!-- docker run -d -p 2046:80 -v $(pwd):/src/app --name calendar calendar:latest -->
docker run -d -p 2046:2046 --name container_calendar image_calendar:latest

# 1
<!-- docker run --name mysql -e MYSQL_ROOT_PASSWORD='' -d mysql:5.7 -->
docker run --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=true -d mysql:5.7
# 2
docker exec -it mysql bash
mysql -u root -p



172.17.0.2/16


