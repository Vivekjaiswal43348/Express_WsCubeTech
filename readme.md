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
Types of middleware: File level and route level
File level: check will apply to all routes of a file
Route Level: check will apply for specific route.

Another types of middleware: Pre-dfeined and custom middle wares.
Pre-defined: app.use(```express.json()```)
Custom: app.use(```checkToken```)