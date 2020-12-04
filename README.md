# Swarley

Backend API for a fictional phonebook app to manage a list of people and their contact details. Built with Adonis.js.

## Requirements
- Node.js (>= v8.0.0)
- Adonis CLI installed globally: `npm i -g @adonisjs/cli`.

## Setup
- Install dependencies:
  ```
  npm install
  ```
- Copy the `.env.example` file to a `.env` file, then run `adonis key:generate` to generate an app encryption key. It will be automatically set as the `APP_KEY` value in your `.env` file.
- Set up the database:
  ```
  adonis migration:run
  ```
  This will create a `swarley.sqlite` file in your database/ folder and set up the database schema.
- Start the app by running `adonis serve` (or `adonis serve --dev` to start in watch mode.)

## Testing
For testing, we're making use of Adonis' test runner, [Vow](https://github.com/adonisjs/adonis-vow). Tests are defined in the test/ folder. To run tests:
```
adonis test
``` 