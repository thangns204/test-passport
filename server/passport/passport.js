const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const config = require('../configuration');

passport.use('facebookToken', new FacebookTokenStrategy({
  clientID: config.oauth.facebook.clientID,
  clientSecret: config.oauth.facebook.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('profile', profile);
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);

    done(null, true);
  } catch(error) {
    done(error, false, error.message);
  }
}));

