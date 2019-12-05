const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcrypt = require('bcryptjs')

//This Is The Create Task Route
router.post('/:totId', async (req, res, next) => {
	//Create Task
	if(req.session.loggedIn){
		try {
		//Create Task
		const createTask = await Task.create(req.body);
		console.log(createTask);
		// res.json(createTask)	
		//Find The Tot associated with that task
		const findTot = await Tot.findById(req.params.totId)
		// res.json(findTot)
		//Push the Task instance created above into the tots array
		findTot.tasks.push(createTask)
		await findTot.save()
		//Find the updated tot
		const totsAndTasks = await Tot.findById(req.params.totId).populate('tasks')
		res.json(totsAndTasks)			
		}
		catch (err) {
			next(err)
		}
	} else {
		res.send('You must be logged in to create a Task')
	}	
})


module.exports = router