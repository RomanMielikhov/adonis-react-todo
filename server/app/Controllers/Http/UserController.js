'use strict';

const User = use('App/Models/User');

class UserController {
  async register({ request }) {
    const { email, password } = request.all();
    const user = await User.create({
      email,
      password,
      username: email,
    });
    return this.login(...arguments);
  }

  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController;
