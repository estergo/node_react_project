const expressJwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const secret = 'secret_tami_4_exercise_secret';

function getTokenFromHeader(req){
    const { authorization } = req.headers;
    if (authorization && (authorization.split(' ')[0] === 'Token' || authorization.split(' ')[0] === 'Bearer')) {
      return authorization.split(' ')[1];
    }
    return null;
  }

  function jwt (){
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        getToken: getTokenFromHeader
    }).unless({path: ['/api/auth/signup', '/api/auth/signin']})
}
  
function sign(user) {
  return jsonwebtoken.sign(user, secret);
}

module.exports = {
  jwt: jwt,
  sign: sign
};