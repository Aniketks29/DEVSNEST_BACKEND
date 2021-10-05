var express = require('express');
var router = express.Router();

var registerInitialChecks = require('../middlewares/registerChecks');
var register = require('../controllers/register');

/* GET home page. */
router.get('/', (req, res, next) => {
  var sess = req.session;
  console.log(sess);
  sess.username = 'aniket';
  res.render('index', { title: 'Express' });
});

/** 
* @requires {email, firstName, lastname, password, confirmPassword} - req.body
* @description
* Security, Performance and edge cases
* ----- first check -----
* email - validate
* password - validate
* password == confirm
* ----- second check ------
* JS/ SQL Injection
* ------ third check -------
* check if email already exists
* password hash
* email lower case conversion
* save
*/

router.post('/register', registerInitialChecks, register);
module.exports = router;
