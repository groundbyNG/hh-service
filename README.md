Simpliest [hh.ru](https://hh.ru) Node.js service
=============================

Builded with sharding and replication.

Task:
> Сервис по поиску работы и предоставлении вакансий. Компании могут размещать свои вакансии, пользователи могут на них откликаться. Пользователи могут размещать свои резюме, а компании могут на них откликаться. Также должна быть возможность написания отзывов о компаниях.

REQUIREMENTS
------------
Tested on next environment:
- Ubuntu 20.04.1 LTS (Focal Fossa)
- Node v14.18.2
- MongoDB v3.6.8
- MongoDB Shell (mongosh) v1.1.7

INSTALLATION
------------
1. Install [mongodb](https://mongodb.com) , [mongosh](https://docs.mongodb.com/mongodb-shell/)
2. Run: 
```
  >  npm i
```

QUICK START
------------
1. Run `start.sh` script with sudo root privileges, like this:
```
  >  sudo bash start.sh
```
2. Wait until 30-40s (depends on your machine) and run in new terminal:
```
  >  npm start
```

TESTS
------------
Tests requests (cURLs) can be found in `curls` folder
