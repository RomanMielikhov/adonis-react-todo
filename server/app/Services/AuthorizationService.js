const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourseNotExistException = use(
  'App/Exceptions/ResourseNotExistException'
);

class AuthorizationService {
  verifyPromission(resource, user) {
    if (!resource) {
      throw new ResourseNotExistException();
    }
    if (resource.user_id !== user.id) {
      throw new InvalidAccessException();
    }
  }
}

module.exports = new AuthorizationService();
