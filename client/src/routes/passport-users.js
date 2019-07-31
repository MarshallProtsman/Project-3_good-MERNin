const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//User model
const user = require('../../models/User.js');
const userSession = require('../../models/UserSession.js');

//Login Page
router.get('/login', (req, res) => res.render('Login'))

//Registration Page
router.get('/register', (req, res) => res.render('Register'))

//Register Handle
router.post('/register', (req, res) => {
    let { name, email, password, password2 } = req.body;
    let errors = [];
    
    email = email.toLowerCase();

    //Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
        alert('Please fill in all fields');
    }

    //Check passwords match
    if(password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
        alert('Passwords do not match');
    }

    //Check password length
    if(password.length < 6) {
        error.push({ msg: 'Password should be at least 6 characters'});
        alert('Password must be at least 6 characters!');
    }

    if(error.length > 0) {
        res.render('register', {
            errors,
            name, 
            email,
            password,
            password2
        });
    } else {
        //Validation passed
        User.findOne({ email: email})
            .then(user => {
                if(user) {
                //User exists
                errors.push({ msg: 'Email is already registered'});
                alert('User already exists! Create a new one');
                res.render('register', {
                    errors,
                    name, 
                    email,
                    password,
                    password2
                });
            } else {
                let newUser = new User({
                    name,
                    email,
                    password
                });
                //Hash Password
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw(err);
                            //Set password to hashed
                            newUser.password = hash;
                            //Save User
                            newUser.save()
                            .then(user => {
                                // check 58 minutes on video to properly display flash message
                                req.flash('success_msg', 'You are now registered and can log in');
                                res.redirect('/users/login');
                            })
                            .catch(err => console.log(err));
                }))
            }
        });
        
    }
});

//Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// new userSession = new UserSession();
// userSession.userId = user._id;
// userSession.save((err, doc) => {
//     if (err) {
//         errors.push({ msg: 'Server Error' });
//         alert('Server Error');
//     }
// });

// return res.send({
//     success: true,
//     message: 'Valid Sign in',
//     token: doc._id
// });

//Logout Handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;