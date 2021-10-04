const User = require('../models/user');
const bcrypt = require('bcrypt');

/**
 * check if email already exists
 * password hash
 * email lower case conversion
 * save
 */

const saltRounds = 10;

const register = async (req, res) => {
    const {email, password} = req.body;

    try {
        const alreadyExists = await User.findOne({ where : { email }});

        if (alreadyExists) {
            res.status(401).send("Email already Exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({ email : email.toLowerCase(), password : hash, fullName : 'abcxyz' });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong..");
    }
}

module.exports = register;