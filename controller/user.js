'use strict';

const validator = require('validator'),
      mongoose = require('mongoose'),
      User = mongoose.model('User'),
      bcrypt = require('bcryptjs');

exports.registerUser = function(req, res, next){

    const {name, email, password} = req.body;
    console.log(name, email, password)

    if (!name) {
        return next(new Error("Missing name!!!"));
    }
    if (!email) {
        return next(new Error("Missing email!!!"));
    }
    if (!validator.isEmail(email)) {
        return next(new Error("Invalid email!!!"));
    }
    if (!password) {
        return next(new Error("Missing password!!!"));
    }

    // const user = new User({
    //           name,
    //           email,
    //           password
    //       });

    // const salt = bcrypt.genSaltSync(10);
    // user.password = bcrypt.hashSync(password, salt);
    // console.log(user)

    let obj = {
      name:name,
      email:email,
      password:password
    }

    User.create(obj, function(err, result){

        if (err) {
          console.log(err)
            return next(new Error('User not created'));
        }
        console.log("result", result);
        res.send("user Registered");
    });


}