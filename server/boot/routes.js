const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../passport/passport');

module.exports = function(app) {
  let router = app.loopback.Router();

  router.route('/oauth/facebook')
    .post(passport.authenticate('facebookToken', { session: false }), async (req, res, next) => {
        console.log('test');
      }
    );
  router.get('/ping', function(req, res) {
    res.send('pong');
  });
  app.use(router);
}
