const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcrypt = require('bcryptjs')


//This Is The Create Tots Route
router.post('/:familyId', async (req, res, next) => {
	// console.log(Family.ObjectId);
	if(req.session.loggedIn){
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
			//See Updated Family <--This is basically a get route!
			res.json(findFamily)


			// const familyAndTots = await Family.findById(req.params.familyId).populate("tots")
			// res.json(familyAndTots)	
			// console.log(familyAndTots);
		}
		catch (err) {
			next(err)
		}
	} else {
		res.send('You must be logged in to create a Tot')
	}
})

module.exports = router