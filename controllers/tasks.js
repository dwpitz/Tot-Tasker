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
			//Find the updated tot - Not needed.
			// const totsAndTasks = await Tot.findById(req.params.totId).populate('tasks')
			res.json(findTot)			
		}
		catch (err) {
			next(err)
		}
	} else {
		res.send('You must be logged in to create a Task')
	}	
})

//Update A Task
//
router.put('/:taskId', async (req, res, next) => {
	if (req.session.loggedIn) {
		try {
			const updatetask = await Task.findByIdAndUpdate(req.params.taskId, req.body)
			const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body)
			// console.log(updatedFamily);
			res.send(updatedTask)	
			console.log(updatedTask);    
		} catch(err){
			next(err)
			res.send(err)
		}
	} else {
		res.send("You need to log in to update the task")
	}
})
	

module.exports = router