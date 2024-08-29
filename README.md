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

## use postman to validate

<img width="750" alt="postman-test1" src="https://github.com/user-attachments/assets/722fb9f7-d770-4ce8-a028-d7adafd73184">
<img width="754" alt="postman-test2" src="https://github.com/user-attachments/assets/226e982a-1773-4c28-addf-bf3f6dc1f02f"><img<img width="758" alt="postman-update1" src="https://github.com/user-attachments/assets/41420b66-2a27-49f8-892c-872299c78ab0"><img width="803" alt="postman-inputvalid" src="https://github.com/user-attachments/assets/3f8f0ea5-72f8-4a39-9b7b-cd2d298f713a">

 width="1060" alt="mongo-te<img width="791" alt="postman-err-r1" src="https://github.com/user-attachments/assets/47654142-e486-4dbe-8<img width="778" alt="postman-err-l1" src="https://github.com/user-attachments/assets/73fc54cc-8549-4988-8e29-647b32f814bf">
6f0-f08a527a3f0e">
st1" src="https://github.com/user-attachments/assets/18afed86-677c-4792-837d-141662de2b6f">

<img width="669" alt="postman-test3" src="https://github.com/user-attachments/assets/8dea5ced-30ca-4bcc-b538-4993c6afd3f2">
