## Backend of user registration, login and reset of password with validation of input

## Tech stack used:
- javascript
- nodejs
- expressjs and express routing
- MongoDB
- jwt 
- zod
- bcrypt

## Steps to execute
1. Clone the repository<img width="728" alt="test1" src="https://github.com/user-attachments/assets/ea983d3c-f287-40c4-84af-c61687fa31ed">

2. Install the required packages by running `npm install` in the terminal
3. Create a new MongoDB database and replace the `MONGO_URI` or used docker to create mongo image
4. Run the application by executing `node index.js` in the terminal

## code explaination 
- created index.js as the main server and route it to the routes folder
- created one more `index.js` in the routes folder to handle the routes comming in
- created `user.js` in routes folder to handle user registration, login and reset of password
- created `auth.js` to handle the authentication of user
- zod is used for input validation

## use postman to validated
