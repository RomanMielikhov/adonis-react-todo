'use strict';

const User = use('App/Models/User');
const Hash = use('Hash');

class UserController {
  async register({ request, response }) {
    const { email, password } = request.all();
    const findUser = await User.findBy('email', email);
    if (findUser) {
      return response.status('400').json({ message: 'email already used' });
    }
    const user = await User.create({
      email,
      password,
      username: email,
    });
    return this.login(...arguments);
  }

  async login({ request, response, auth }) {
    const { email, password } = request.all();
    const findUser = await User.findBy('email', email);
    if (!findUser) {
      return response.status('400').json({ message: 'not found email' });
    }
    const isSame = await Hash.verify(password, findUser.password);
    if (!isSame) {
      return response.status('400').json({ message: 'invalid password' });
    }
    const token = auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController;
