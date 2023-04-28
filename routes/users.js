var express = require('express');
var router = express.Router();

const User = require('../models/User.model')

const { isLoggedIn } = require('../middleware/route-guard')

/* GET users listing. */
// router.get('/profile', function (req, res, next) {
//   res.render('users/user-profile.hbs');
// });

router.get('/profile/', isLoggedIn, (req, res, next) => {
  if (!req.session.user) {
    res.render('users/user-profile.hbs')
    return;
  }

  const user = req.session.user

  console.log("This is the user:", user)

  res.render('users/user-profile.hbs', { user: user })
  // User.findById(req.params.id)
  //   .then((foundUser) => {
  //     console.log("found User", foundUser)
  //     res.render('users/user-profile.hbs', foundUser)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
})

module.exports = router;
