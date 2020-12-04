'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
    return {
        email: faker.email(),
        password: faker.password(),
    }
})

Factory.blueprint('App/Models/Contact', (faker) => {
    return {
        name: faker.name()
    }
})

Factory.blueprint('App/Models/ContactData', (faker) => {
    const labels = ['Mobile', 'Home', 'Work']
    const ContactDatum = require('../app/Models/ContactDatum');
    const categories = Object.values(ContactDatum.CATEGORIES);
    const category = categories[Math.floor(Math.random() * categories.length)]; // Random category
    return {
        category,
        value: faker.string(),
        label: labels[Math.floor(Math.random() * labels.length)]
    }
})
