'use strict'

const {test, trait} = use('Test/Suite')('Auth')

trait('Test/ApiClient')

test('Users can sign up and get an auth token', async ({assert, client}) => {
  const response = await client.post('/auth/signup')
      .header('accept', 'application/json')
      .send({
        email: 'heyo@gd.com',
        password: 'ahg4r45yjhd',
      }).end()

  response.assertStatus(201)
  response.assertJSONSubset({
    data: {
      email: 'heyo@gd.com',
      id: 1,
    },
    auth: {
      type: 'bearer',
      refreshToken: null
    }
  })
  const body = response.body
  assert.property(body.auth, 'token')
  assert.isString(body.auth.token)
})


test("Users can't sign up with already-taken emails", async ({assert, client}) => {
  let response = await client.post('/auth/signup')
      .header('accept', 'application/json')
      .send({
        email: 'hereiam@gd.com',
        password: 'iyu98974',
      }).end()
  response.assertStatus(201)

  response = await client.post('/auth/signup')
      .header('accept', 'application/json')
      .send({
        email: 'hereiam@gd.com',
        password: 'iyu98974',
      }).end()

  // TODO Use Adonis validation to catch this at app level so it's a 400
  // + Assert on the error content/shape
  response.assertStatus(500)
})
