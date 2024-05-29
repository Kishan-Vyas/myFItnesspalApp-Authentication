# Project README
## Project Overview

This project consists of a frontend built with React and Vite, and a backend built with Node.js. The backend utilizes several libraries including Nodemailer, JWT, and MongoDB, while the frontend incorporates Recoil for state management and Tailwind CSS for styling.

# Table of Contents
## Project Overview
### Frontend

React
Recoil
Tailwind CSS

### Backend

Node.js
Express.js
Nodemailer
JWT
MongoDB

## Navigate to the frontend directory:

```js
cd frontend
```
### Install the dependencies:
```js
npm install
```
### Development Server
To start the development server, run:
```js
npm run dev
```
This will start the Vite server and open the application in your default web browser. The development server will reload automatically whenever you make changes to the code.

### Recoil
Recoil is used for state management in this project. The state logic is located in the src/recoil directory. To add new atoms or selectors, create new files within this directory and import them into your components as needed.

### Tailwind CSS
Tailwind CSS is used for styling the application. The configuration file tailwind.config.js is located in the root of the frontend directory. You can add custom configurations or extend the existing styles in this file.

To include Tailwind CSS in your components, use the utility classes provided by Tailwind. For example:

## Backend
### Installation
Navigate to the backend directory:

```js
cd backend
```
Install the dependencies:
```js
npm install
```

To start the server, run:
```js
node index.js
```
This will start the Node.js server .

### Nodemailer
Nodemailer is configured to send emails. The configuration is located in the config/nodemailer.js file. Ensure you have set the correct email service provider and authentication details.

### JWT
JWT (JSON Web Token) is used for authentication. To create and verify tokens, you can use the jsonwebtoken library.

### MongoDB
MongoDB is used as the database for this project. Ensure you have a MongoDB instance running and the connection string set in your file.

### Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss the changes you wish to make.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.
