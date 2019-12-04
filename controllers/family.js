const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcryptjs = require('bcryptjs')


//Family Login Route
router.post('/login', async (req, res, next) => {
	try {
		const foundFamily = await Family.find({
			familyName: req.body.familyName
		})
		if(foundFamily.length === 0){
			console.log('Family does not exist');
			res.redirect('/family/login')
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

module.exports = router