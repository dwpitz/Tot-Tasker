const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcrypt = require('bcryptjs')

//Family Get Routes
//Get Tots
//Get Tot's Tasks
//Get Tot's Completed Tasks
router.get('/:familyId', async (req, res, next) => {
    console.log('hitting the route');
    if (req.session.loggedIn) {
        try {
            //Find the family object w/ tots populated
            const foundFamily = await Family
                .findById(req.params.familyId)
                .populate({
                    path: 'tots',
                    populate: {
                        path: 'tasks'
                    }
                })
            console.log(foundFamily);
            res.json({
                status: 200,
                message: 'This is your Family',
                data: foundFamily
            })

        } catch (err) {
            next(err)
            res.json({
                status: 400,
                message: 'Bad Request',
                data: err
            })
            console.log(err)
        }
    } else {
        res.json({
                status: 401,
                message: 'You must be logged in'
            })
    }
})

//Family Login Route
router.post('/login', async (req, res, next) => {
    try {
        const foundFamily = await Family.find({
            familyName: req.body.familyName
        })
        console.log(foundFamily, "This is FoundFamily");
        if (foundFamily.length === 0) {
            console.log('Family does not exist');
        } else {
            const pw = req.body.password
            console.log(foundFamily[0]);
            if (bcrypt.compareSync(pw, foundFamily[0].password)) {
                req.session.loggedIn = true
                req.session.familyName = foundFamily[0].familyName
                req.session.familyId = foundFamily[0]._id
                console.log('\n This is the session INFO')
                console.log(req.session)
                // res.send("You are logged In")
                res.json({
                    status: 200,
                    message: 'You are logged in',
                    data: foundFamily
                })
            } else {
                res.json({
                    status: 400,
                    message: 'Incorrect Password'
                })
            }
        }

    } catch (err) {
        next(err)
        res.json({
            status: 400,
            message: 'Bad Request',
            data: err
        })
        console.log(err)
    }
})

//Registration Route - POST
router.post('/register', async (req, res, next) => {
    console.log("this is req.body.familyName");
    console.log(req.body.familyName)
    console.log("this is req.body.password");
    console.log(req.body.password)
    try {
        const familySearch = await Family.findOne({
            familyName: req.body.familyName
        })
        console.log('\n Does the family exist in the DB?');
        console.log(familySearch);
        if (familySearch !== null) {
            res.json({
                status: 401,
                message: 'That particular account name Is taken'
            });
        } else {
            console.log('here we go.  Hitting the else route to check the password. Below is the CL for req.body.password:')
            console.log(req.body.password);
            const pw = req.body.password
            // console.log('\n this is req.body.password:');
            // console.log(pw);
            const hashedString = bcrypt.hashSync(pw, bcrypt.genSaltSync(10));
            console.log(hashedString);
            const createdFamily = await Family.create({
                familyName: req.body.familyName,
                email: req.body.email,
                password: hashedString,
                admin1: req.body.admin1,
                admin2: req.body.admin2,
                admin3: req.body.admin3
            })
            console.log('\nHere is the created family in POST /Family/Register')
            console.log(createdFamily)
            req.session.loggedIn = true
            req.session.familyId = createdFamily._id
            req.session.familyName = createdFamily.familyName
            res.json({
                status: 200,
                message: 'You have registered For the Site',
                data: createdFamily
            })
        }
    } catch (err) {
        res.json({
            status: 400,
            message: 'Bad Request',
            data: err
        })
        console.log(err)
        // next(err)
    }
})

// user logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(error)
        } else {
            res.json({
                status: 200,
                message: 'You have logged out of your account'
            });
        }
    })
})

// update route for family
router.put('/:familyId', async (req, res, next) => {
    if (req.session.loggedIn) {
        try {
            const updateFamily = await Family.findByIdAndUpdate(req.params.familyId, req.body)
            const updatedFamily = await Family.findByIdAndUpdate(req.params.familyId, req.body)
            // console.log(updatedFamily);
            res.json({
                status: 200,
                message: 'You have updated your account',
                data: updatedFamily
            })
            console.log(updatedFamily);
        } catch (err) {
            next(err)
            res.json({
                status: 400,
                message: 'Bad Request',
                data: err
            })
        }
    } else {
        res.json({
            status: 401,
            message: 'You need to login to update your family'
        })
    }
})

module.exports = router