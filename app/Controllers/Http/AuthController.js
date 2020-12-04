'use strict'

const User = use('App/Models/User');

class AuthController {
  async signup({ auth, request, response }) {
    const data = request.only(['email', 'password']);
    const user = await User.create(data);
    // Return a new auth token so the user doesn't need to call getToken separately
    const token = await auth.generate(user);
    response.status(201).send({
      data: user,
      auth: token
    });
  }

  async getToken({ auth, request }) {
    const { email, password } = request.all()
    return {data: await auth.attempt(email, password)};
  }
}

module.exports = AuthController
