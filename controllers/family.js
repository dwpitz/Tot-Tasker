const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcrypt = require('bcryptjs')


//Family Login Route
router.post('/login', async (req, res, next) => {
	try {
		const foundFamily = await Family.find({
			familyName: req.body.familyName
		})
		if(foundFamily.length === 0){
			console.log('Family does not exist');
		} else {
			const pw = req.body.password
			console.log(foundFamily[0]);
			if(bcryptjs.compareSync(pw, foundFamily[0].password)) {
				req.session.loggedIn = true
				req.session.familyName = foundFamily[0].familyName
				req.session.familyId = foundFamily[0]._id
				console.log(req.session,' session info')
				res.redirect('/family/'+req.session.familyId)
			} else {
				console.log('bad password');
				res.redirect('/family/login')
			}

		}

	}
	catch (err) {
		next(err)
	}
})

//Registration Route - POST
router.post('/register', async (req, res, next) => {
	console.log("this is req.body.familyName");
	console.log(req.body.familyName)
	console.log("this is req.body.password");
	console.log(req.body.password)
	try {
		const familySearch = await Family.findOne(
			{familyName: req.body.familyName}
		)
		console.log('\n Does the family exist in the DB?');
		console.log(familySearch);
		if (familySearch !== null) {
			console.log('family name is taken');
		} else {
			console.log('here we go.  Hitting the else route to check the password. Below is the CL for req.body.password:')
			console.log(req.body.password);
			const pw = req.body.password
			// console.log('\n this is req.body.password:');
			// console.log(pw);
			const hashedString = bcrypt.hashSync(pw, bcrypt.genSaltSync(10));
			console.log(hashedString);
			const createdFamily = await Family.create({familyName: req.body.familyName, password: hashedString, email: req.body.email})
			console.log('\nHere is the created family in POST /Family/Register')
			console.log(createdFamily)
			req.session.loggedIn = true
			req.session.familyId = createdFamily._id
			req.session.familyName = createdFamily.familyName
			res.send("Created A Family")
		}
	}
	catch (err) {
		res.send("this is an error")
		console.log(err)
		// next(err)
	}	
})

module.exports = router