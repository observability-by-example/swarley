# Swarley

Backend API for a fictional phonebook app to manage a list of people and their contact details. Built with Adonis.js.

## Setup 
### With Docker
- Copy the `.env.example` file to a `.env` file.
- Run `docker-compose up` from the project directory to start the app (and an included SQLite database) on http://localhost:3333


### Without Docker
You'll need Node.js (>= v10.0.0)

- Install dependencies:
  ```
  npm install
  ```
- Copy the `.env.example` file to a `.env` file
- Set up the database by running `node ace migration:run`. This will create a `swarley.sqlite` file in your database/ folder and set up the database schema.
- Start the app on http://localhost:3333 by running `npm start`