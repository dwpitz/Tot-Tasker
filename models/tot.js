const mongoose = require('mongoose')

const totSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	imageURL: String,
	//will be an array of Task Ids...
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task' 
	}],
})

//Tot is our collection...
const Tot = mongoose.model('Tot', totSchema);
module.exports = Tot;