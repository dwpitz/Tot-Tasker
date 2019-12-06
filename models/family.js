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
	//Will be an array of Tot ids... _id
	tots: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tot'
	}], 
	//Will be an array of Task ids...
	// tasks: [{
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Task'
	// }], 
	//Wondering if both of these should actually be in or ref. task model?
	completedTasks: [{String}], //<-- OverallScoreboard and resetting scoreboard
	taskArchive: [{String}], //<-- Historical
	admin1: String,
	admin2: String,
	admin3: String
})

//Family is our collection...
const Family = mongoose.model('Family', familySchema);

module.exports = Family;

