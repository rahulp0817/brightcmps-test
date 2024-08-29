## Backend of user registration, login, and reset of password with validation of input

## Tech stack used:
- javascript
- nodejs
- expressjs and express routing
- MongoDB
- jwt 
- Zod
- bcrypt

## Steps to execute
1. Clone the repository

2. Install the required packages by running `npm install` in the terminal
3. Create a new MongoDB database and replace the `MONGO_URI` or use docker to create a Mongo image
4. Run the application by executing `node index.js` in the terminal

## code explanation 
- created index.js as the main server and routed it to the routes folder
- created one more `index.js` in the routes folder to handle the routes coming in
- created `user.js` in the routes folder to handle user registration, login, and reset of password
- created `auth.js` to handle the authentication of the user
- Zod is used for input validation
- I used Docker to create a Mongo image 

## use postman to validate

## Registration with hashed password
<img width="750" alt="postman-test1" src="https://github.com/user-attachments/assets/722fb9f7-d770-4ce8-a028-d7adafd73184">

## MongoDB store 
<img width="1060" alt="mongo-test1" src="https://github.com/user-attachments/assets/e94f0be8-6f1e-4f7b-a4e1-f2ceb1f61b1d">

## error registration
<img width="791" alt="postman-err-r1" src="https://github.com/user-attachments/assets/dd50cf72-c41b-4f4b-a1f5-1c3ce2c11e0e">

## login
<img width="754" alt="postman-test2" src="https://github.com/user-attachments/assets/226e982a-1773-4c28-addf-bf3f6dc1f02f">

<img width="669" alt="postman-test3" src="https://github.com/user-attachments/assets/8dea5ced-30ca-4bcc-b538-4993c6afd3f2">

## error login
<img width="778" alt="postman-err-l1" src="https://github.com/user-attachments/assets/73fc54cc-8549-4988-8e29-647b32f814bf">

## update password 
<img width="758" alt="postman-update1" src="https://github.com/user-attachments/assets/43039efb-f023-4494-9757-b947d5062ee4">

## error input validation using Zod
<img width="803" alt="postman-inputvalid" src="https://github.com/user-attachments/assets/fcff5ee6-9b5a-4c9c-ab51-e84dddfa1077">







