 
<h1 align="center">
FoodieLand
</h1>
<p align="center">
Nodejs + Express + MongoDB + HTML5 + Heroku
</p>

## Authors
[Weihong Yang](https://github.com/wyang10/foodieland) | [Yuan Wang](https://github.com/yuanwang) 

## Description
- Web Development Project 2 : FoodieLand
- Project Objective : Apply the concepts learned in class by building a basic fullstack application with Nodejs, Express, javascript, MongoDB and HTML5. Deploy on Heroku.

## Project Intro
- Build a network of community application called 'foodieLand' where people can dive into their favorite restaurants. 
- Registered users submit content to the site such as links, text posts, images which are then voted stars by other members. 
- Allowed user implement CRUD operations on it. The collections in the database would be based on the length from the user's current location and the numeric ranking of the chosen restaurant.

## Design Mockup:
[Link to Design-Mockup](Design-Mockup.pdf) wow, this mock up is perfessional. It is better than MS visio we used for sure! 

## Screenshots Preview:
Login
![](Screenshots/login.png)

Edit Portfolio
![](Screenshots/edit_portfolio.png)

Add review/ Upload photo
![](Screenshots/add_upload.png)



Review
![](Screenshots/review.png)

Portfolio
![](Screenshots/portfolio.png)

Search
![](Screenshots/search.png)

Rate
![](Screenshots/rate.png)


### License
[MIT](LICENSE)

## Functionalities
- User can login and sign up (sign out) account. @Yuan Wang
- User can add/delete restaurants with address, upload pictures, and write reviews. @Weihong Yang
- User can edit their profile reviews and rate by stars from scale 1 to 5. @Yuan Wang 
- User can search profile to show the restaurant with related rating and comments. @Weihong Yang

## Class Info
- Class Link: https://johnguerra.co/classes/webDevelopment_fall_2022/
- Professor: <a href="https://johnguerra.co/"> John Alexis Guerra Gómez </a>
- Release: <a href="https://bloodcurdling-crypt-94860.herokuapp.com/"> Here to Start </a>
- Demo: <a href="https://www.youtube.com/watch?v=bp1zdDSDM5o"> Video </a>



At the `db` folder, we have provided 2 JSON files to be used as a collection for the database.
1. foodiehouse.json
2. login.json

#### Creating local database
Before running the program we first need to create a local database.
Run the following command in your terminal to start local mongo server: `mongod --dbpath ~/data/db`
Keeping the local server running, open a new terminal and run the following to create nomadLocalDB database and import the given JSON files as collections:
1. Projects collection
```
mongoimport -h localhost:27017 -d foodDB -c login --drop --jsonArray --file ./db/login.json 
```
2. Users collection
```
mongoimport -h localhost:27017 -d foodDB -c foodiehouse --drop --jsonArray --file ./db/foodiehouse.json 
```
NOTE: In `./db/myMongoDB.js` make sure the global constant is saying `DB_NAME = "foodDB"`, otherwise the program cannot find the local database.

#### Running locally
Once the local database has been created, follow these steps to run locally:
1. Run Mongo server: `mongod --dbpath ~/data/db`
2. Run client server: `npm start`
3. Using your browser go to localhost: http://locahost:3001/

## For simply Clone or Download
```terminal
$ git clone git@github.com:wyang10/Foodieland.git
$ npm start

```

## Prerequirements
- [MongoDB](https://www.mongodb.com/3)
- [Node](https://nodejs.org/en/download/) v14.15.4
- [npm](https://nodejs.org/en/download/package-manager/)

## Instructions
- Main folders:
  * db: Connections to databases and other operations.
  * public: Static files. Include frontend javascript, html files and corresponding css files.
  * routes: Backend javascript files.


