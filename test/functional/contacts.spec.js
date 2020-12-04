'use strict'

const {before, test, trait} = use('Test/Suite')('Contacts')

trait('Test/ApiClient')
trait('Auth/Client')

const Factory = use('Factory');

test('Users can create a contact', async ({assert, client}) => {
    const user = await Factory.model('App/Models/User').create()
    const contactData = {
        name: "Pete",
        phoneNumbers: [
            {
                value: "498784",
                label: "Mobile"
            },
            {
                value: "49879784",
                label: "Work"
            }
        ],
        emailAddresses: [
            {
                value: "james@o.noh",
                label: "Work"
            }
        ],
        mailingAddresses: [
            {
                value: "1202 Home Avenue",
                label: "Home"
            }
        ]
    }
    const response = await client.post('/contacts')
        .header('accept', 'application/json')
        .loginVia(user, 'jwt')
        .send(contactData).end()

    response.assertStatus(201)
    response.assertJSONSubset({data: contactData})
    const body = response.body
    assert.equal(body.data.user_id, user.id)
})

test('Users can fetch only their contacts', async ({assert, client}) => {
    const user1 = await Factory.model('App/Models/User').create()
    const user2 = await Factory.model('App/Models/User').create()
    const contacts = await Factory.model('App/Models/Contact').makeMany(3)
    await user1.contacts().saveMany([contacts[0], contacts[2]])
    await user2.contacts().save(contacts[1])

    const response = await client.get('/contacts')
        .header('accept', 'application/json')
        .loginVia(user1, 'jwt')
        .end()

    response.assertStatus(200)
    const body = response.body
    assert.equal(body.data.length, 2)
    body.data.forEach(contact => assert.equal(contact.user_id, user1.id))
    assert.equal(body.data[0].id, contacts[0].id)
    assert.equal(body.data[1].id, contacts[2].id)
})
