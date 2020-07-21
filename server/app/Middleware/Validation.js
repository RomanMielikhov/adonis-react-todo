'use strict';

const { validate } = use('Validator');

class Validation {
  async handle({ request, response }, next) {
    const rules = {
      email: 'required|email',
      password: 'required',
    };

    const messages = {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      const message = validation.messages()[0].message;
      return response.status('400').json({ message: message });
    }
    await next();
  }
}

module.exports = Validation;
