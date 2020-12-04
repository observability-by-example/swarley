'use strict'

const {before, beforeEach, after, afterEach, test, trait} = use('Test/Suite')('Contacts')

trait('Test/ApiClient')
trait('Auth/Client')

const User = use('App/Models/User');

let user;

before(async () => {
    user = await User.create({
        email: 'contact@gd.com',
        password: 'ahg4r45yjhd',
    });
})

test('Users can create a contact', async ({assert, client}) => {
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
