var config = {

  // Our Node API is being served from localhost:3001
  baseUrl: 'http://nms.lathwood.uk',
  // The API specifies that new users register at the POST /users enpoint.
  //signupUrl: 'users',
  // Logins happen at the POST /sessions/create endpoint.
  loginUrl: 'api/v0/auth',
  // The API serves its tokens with a key of id_token which differs from
  // aureliauth's standard.
  tokenName: 'token',
  // Once logged in, we want to redirect the user to the welcome view.
  loginRedirect: '#/overview',

}

export default config;
