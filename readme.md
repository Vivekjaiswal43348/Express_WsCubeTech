
# Project Title

A brief description of what this project does and who it's for

# Project Code-3

## Creating a BE Server using : ExpressJS

## Basic NodeJS with ExpressJS frame work
1. npm init -y
2. setup npm start with: nodemon index
3. npm i express
4. write basic express code in index.js file


## what is express JS?


## what are the core features of express JS?
1. Easy Routing and also supports child routing.
2. Middleware features like authentication
3. HTTP methods for CRUD operation (GET/POST/PUT/DELETE)
4. MVC model
5. UI at backend side


# Thunder Client: a VS_Code extension tool that we will use to mock/verify BE API at FE side.
    another tool can be used for the same purpose is Postman

## GET vs POST HTTP methods
GET: Open API can be accessible by any one
POST: a secure API call and also mostly used to send a JSON data to BE server.

## How many ways can we send data from FE to BE?
There are three ways:
1. Query Params (Browser URl): used when user searches something
2. JSON Payload data: when user saves a form data
3. Dynamic data(like ID): when user navigating to details page

## Can we directly use a POST type HTTP method at BE to receive data from BE?
No, to consume JSON type data at BE we must write this code.
app.use(express.json());

## what is a middleware?
A middleware is nothing but a method.

Types of middleware: File level and route level \
File level: check will apply to all routes of a file\
Route Level: check will apply for specific route.

Another types of middleware: Pre-dfeined and custom middle wares.
Pre-defined: app.use(`express.json()`)\
Custom: app.use(`checkToken`)

## route level middle ware
Lets convert checkToken from File level to route level middleware.

## env variables
Added .env file with env constants and accessing those gloabbly withthe hep of `dotenv` library.

## Intro to Mongo DB
MongoDB is an open-source, non-relational database management system (DBMS) that stores data in JSON-like documents.

## MomgoDb installation
Install MgDB from MongoDB community Server: https://www.mongodb.com/try/download/community

post installation:
- we will be able to see a compass application
- Here, we can create a new connection, by giving any name to it like: newDB etc
- then save and connect.
- now, we can use mongoDB in our project


## Mongo DB Database commands
- open MongoDB compass tool
- we can create connections using + icon (connection means DataBase)
- once connection created, we can see by default three tables will be there
    - admin
    - config
    - local
- we can use two options to create a DB for us in compass tool
    - By UI create DBs, (Not recommended)
    - Powershell commands(for devs highlr recommended)

MongoDB tool: `MongoDBCompass`

doubt:\
is connection means a DB in mongoDB?\
I think NO.

than what is a connection in MongoDB?\
`In MongoDB, a "connection" refers to an established network link between your application (client) and the MongoDB server, allowing your application to send queries, read data, and write data to the database`

command to refresh compass Compass Tool UI: `ctrl + r`

`Connection`: connection is not a Database, we can create DBs inside connection
`Collection`: tables are called as collection
`DB`: a collection of documents is called DB in MongoDb, as mongoDB is a NoSQL DB.

## Some Basic MongoDB power shell commands (CRUD operations):
- create a connection: `use <DB_NAME>`\
    like: `use SchoolDB`
- create a table inside DB: `db.createCollection('<COLLECTION_NAME>')`
    like: `db.createCollection('class1_2025');`
- rename a collection: `db.'<OLD_NAME>'.renameCollection('<NEW_NAME>')`\
    like: `db.SchoolDB.renameCollection(kvsDB);`
- Delete a table/collection: `db.<table_name>.drop()`\
    like: `db.kvsDB.drop();`
- drop a database: `db.dropDatabase()`
- show list of tables: `show dbs` or `show databases`

- insert record in a table
    - insertone
        `db.<table_name>.insertOne({})`\
            like: `db.kvsDB.insertOne({"name": "vivek", "email": "vivek@gmail.com"})`
    - insertmany
        `db.<table_name>.insertMany([])`\
            like: `db.kvsDB.insertMany([{""name": "Shiva", "email": "shiva@gmail.com},{"name": "Adarsh", "email": "adarsh@gmail.com"}])`

- show table data: 
    `db.<collection_name>.find().pretty()`
    `db.<collection_name>.find()`
- find from table:
    `db.<collection_name>.find({"name": "vivek"})`
- find unique data from table:
    `db.<collection_name>.findOne(_id: ObjectId("<__id__>"))`
    like: `db.KVS_School.findOne({_id:ObjectId("67c487999e825c7960c9aa54")})`

- Delete command:\
    like: `db.KVS_School.deleteOne({_id: ObjectId("67c487999e825c7960c9aa54")})`

- update command:\
    like: `db.KVS_School.updateOne({"name": "vivek jaiswal"}, {$set: {"email": "vivek.jaiswal@gmail.com"}})`\
    or \
     `db.KVS_School.updateOne({_id: ObjectId("67c487329e825c7960c9aa53")}, {$set: {"name": "vivek jaiswal"}})`