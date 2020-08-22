const ResourseNotExistException = use(
  'App/Exceptions/ResourseNotExistException'
);

class AuthorizationService {
  verifyPromission(respounse, user) {
    if (!respounse) {
      throw new ResourseNotExistException();
    }
  }
}

module.exports = new AuthorizationService();
