const express = require('express');
const router = express.Router()
const Family = require('../models/family');
const Task = require('../models/task');
const Tot = require('../models/tot');
const bcrypt = require('bcryptjs')

//This Is The Create Task Route
router.post('/:totId', async (req, res, next) => {
    //Create Task
    if (req.session.loggedIn) {
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
            res.json({
                status: 200,
                message: 'You have created a task',
                data: findTot
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
                message: 'You must be logged in to create a Task.'
        		})
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
            res.json({
                status: 200,
                message: 'You have updated a task',
                data: updatedTask
            })
            console.log(updatedTask);
        } catch (err) {
            next(err)
            res.json({
                status: 400,
                message: 'Bad Request',
                data: err
            })
        }
    } else {
        res.send("You need to log in to update the task")
        res.json({
                status: 401,
                message: 'You must be logged in to update a Task.'
        		})
    }
})

//Delete A Task
router.delete('/:taskId', async (req, res, next) => {
    if (req.session.loggedIn) {
        try {
            const foundTask = await Task.find({
                taskId: req.params.taskId
            })
            const deletedTask = await Task.findByIdAndRemove(req.params.taskId)
            res.json({
                status: 200,
                message: 'You have deleted a task',
                data: deletedTask
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
                message: 'You must be logged in to update a Task.'
        		})

    }
})


module.exports = router