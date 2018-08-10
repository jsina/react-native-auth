# REACT-NATIVE AUTHENTICATION

Here is the sample project on both fornt-end and back-end to give you some hint for registering, logging, logout, check token on both side. 

## Technology I've been used
back-end

node.js

[mogoose](http://mongoosejs.com/) as the ORM

[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

---
## Prerequisite
crate an account on [mlab](https://mlab.com) for creating free mongo database or you could have mongo locally.

You have to create the `.env` file on the root of `server` project with followd data:

`
DB_USER=
DB_PASS=
DB_HOST=
TOKEN_SEC=
`

DB_USER, DB_PASS, DB_HOST is for your database and TOKEN_SEC is for json web token

## Running

at the root of project move to `server` directory. 
then run:

`npm install`

`node starter.js`

also for runnig client side you could use command:

`yarn`

`react-native run-android`
Or
`react-native run-ios`
