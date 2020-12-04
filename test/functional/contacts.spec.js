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

