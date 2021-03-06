# Swarley

Backend API for a fictional phonebook app to manage a list of people and their contact details. Built in JS (Adonis.js 4.1).

## Setup 
### With Docker
- Copy the `.env.example` file to a `.env` file.
- Run `docker-compose up` from the project directory to start the app (and an included SQLite database) on http://localhost:3333


### Without Docker
You'll need Node.js (>= v12.0.0)

- Install dependencies:
  ```
  npm install
  ```
- Install the Adonis CLI globally:
  ```
  npm i -g @adonisjs/cli
  ```
- Copy the `.env.example` file to a `.env` file
- Set up the database by running `node ace migration:run`. This will create a `swarley.sqlite` file in your database/ folder, set up the database schema, and create a new user with email `ned@flanders.com` and password `admin`.
- Start the app on http://localhost:3333 by running `adonis serve --dev`