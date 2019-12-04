const mongoose = require('mongoose')

const familySchema = new mongoose.Schema({
	familyName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	tots: {[
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tot'
	]}, 
	tasks: {[
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task'
	]}, 
	//Wondering if both of these should actually be in or ref. task model?
	completedTasks: {[String]}, //<-- OverallScoreboard and resetting scoreboard
	taskArchive: {[String]},
	admin1: String,
	admin2: String,
	admin3: String
})
