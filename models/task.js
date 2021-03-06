const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	//Will be an array of tot ids...
	taskName: {
		type: String,
		required: true
	},
	tot: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tot'
	},
	reward: {
		type: String,
		required: true
	},
	coundownToCompletion: {
		type: Number,
		required: true
	}, 
	countSoFar: {
	 	type: Number,
		required: true
	}
	// date: Date //Not required at the moment
})

//Task is our collection...
const Task = mongoose.model('Task', taskSchema);
module.exports = Task; //<-- I am unsure if this should be singular or splural.
