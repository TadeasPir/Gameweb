





# Getting Started:

## What software you need:
- react boostrap
- vite
- react
- react router
  

## Installation of the project:
### Fork the `github/Tadeaspir/gameweb` repo

You'll be making copy of the "gameweb" repository so you have your own project to customize. A "fork" is a copy of a repository. So select "Fork" atop [the `github/TadeasPir/Gameweb` repository](https://github.com/TadeasPir/Gameweb).

Once you've found a home for your forked repository.
Install in your local development environment
If you want to manage your website in a local web development environment, you'll be using Vite.

Once you've found a home for your forked repository, clone it.

## Install

go to / frontend
`` npm i``

if needed, install some dependencies manually with `` npm install {name of dependency} ``

the name of the dependency can be found in error code

now do ``npm run dev`` in terminal inside your frontend and you should see something like this:
```
  VITE v5.2.11  ready in 363 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

folow the link.

go to / backend
[python 3 installation for windows](https://www.microsoft.com/store/productId/9NRWMJP3717K?ocid=pdpshare)

`` pip install -r dependencies ``






start redis
[for windows users follow this guide to install redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/)

`` systemctl start redis-server ``

create .env file in / backend directory with your secret key

`` SECRET_KEY={your secret key} ``

start backend

`` python3 app.py ``

ideally set Debug mode in flask to false and remove strict mode from frontend
### division of work

Tadeas - Frontend (Main dev)

Josef - Backend

Marie - Frontend (Ssecondary dev)

### If you like our work feel free to star our project.



## Showcase of home page 
![image](https://github.com/TadeasPir/Gameweb/blob/main/image.png)
