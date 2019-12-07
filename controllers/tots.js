const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcrypt = require('bcryptjs')


//This Is The Create Tots Route
router.post('/:familyId', async (req, res, next) => {
    // console.log(Family.ObjectId);
    if (req.session.loggedIn) {
        try {
            // create TOT
            const createTot = await Tot.create(req.body);
            console.log(createTot);
            // find the family
            const findFamily = await Family.findById(req.params.familyId)
            console.log('Below is Find Family');
            console.log(findFamily);
            // push the tot intance created above into the family tots array
            findFamily.tots.push(createTot)
            await findFamily.save();
            res.json({
                status: 200,
                message: 'You have created a tot',
                data: findFamily
            })

            // const familyAndTots = await Family.findById(req.params.familyId).populate("tots")
            // res.json(familyAndTots)	
            // console.log(familyAndTots);
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
                message: 'You must be logged in to create a tot.'
            })
    }
})


router.put('/:totId', async (req, res, next) => {
    if (req.session.loggedIn) {
        try {
            const updateTot = await Tot.findByIdAndUpdate(req.params.totId, req.body)
            const updatedTot = await Tot.findByIdAndUpdate(req.params.totId, req.body)
            // console.log(updatedFamily);
            res.json({
                status: 200,
                message: 'You have updated a tot',
                data: updatedTot
            })
            console.log(updatedTot);
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
                message: 'You must be logged in to update a tot.'
            })
    }
})

//Delete A Tot
router.delete('/:totId', async (req, res, next) => {
    if (req.session.loggedIn) {
        try {
            const foundTot = await Tot.find({
                totId: req.params.totId
            })
            const deletedTot = await Tot.findByIdAndRemove(req.params.totId)
            res.json({
                status: 200,
                message: 'You have deleted a tot',
                data: deletedTot
            })
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
                message: 'You must be logged in to delete a tot.'
            })

    }
})

module.exports = router