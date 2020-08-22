'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

class ResourseNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }) {
    return response.status(404).json({ error: 'Not Exist' });
  }
}

module.exports = ResourseNotExistException;
