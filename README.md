# Swarley

Backend API for a fictional phonebook app to manage a list of people and their contact details. Built with Adonis.js.

## Documentation
To view the API documentation, open the `public/docs/index.html` file in your browser locally.

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

## Not done (because of time constraints)
- User input validation. Right now, we're just trusting the user.😅
- Error handling.
- User management endpoints (change password/email, forgot password, delete account)
- Contact management endpoints (update/delete contact)
- Filtering and advanced sorting (such as sorting by multiple fields) on the fetch contact endpoint
- Better typechecking. Probably not migrate to TypeScript, but use the typechecker.
- Linting. To catch subtle bugs.
- Security fixes. `npm audit` complains about some security vulnerabilities, but they're from transitive dependencies with a complex set of requirements. The newer versions aren't compatible with the current version of Adonis. Would take a while to fix.
- Complete API documentation.

## Technical decisions/tradeoffs
### Framework
[Adonis.js](http://adonisjs.com/). Went with this because Adonis gives us a good starting point by providing most of the boilerplate code and supporting features, like an ORM and query builder. It also handles authentication. All this means I can focus on writing the core logic for the API.

### Database
SQLite, chosen because it's simple to set up and work with, so perfect for a small time-bound project like this. Wouldn't work in a distributed or transient setup, though. Might also face bottlenecks at very high reads since it's file-based, but that's a long way off.

### API Documentation
[Scribe](http://github.com/knuckleswtf/scribe) (by me), because setup is easy and you can get reasonably good docs fast. It's limited, because editing the generated docs can get clunky, but for a simple API, ti works.

### Data structure
Considered going with MongoDB + a denormalised structure (embedding contacts within the user object), but ended up with SQL + normalisation (along with storing phone numbers and addresses as  `ContactData`) because it's more extensible and the normalised approach wouldn't have provided a massive benefit, but could limit the app in the future.

## Dev profiles
- [Dev.to](https://dev.to/shalvah)
- [StackOverflow](https://stackoverflow.com/users/7370522/shalvah)
- [GitHub](https://github.com/shalvah)
- [GitLab](https://gitlab.com/shalvah)