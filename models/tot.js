const mongoose = require('mongoose')

const totSchema = new mongoose.Schema({
	name: String,
	image: String,
	//This was required.  It is not required at the moment because of my empty submit bug.
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task' 
	}],
})

//Tot is our collection...
const Tot = mongoose.model('Tot', totSchema);
module.exports = Tot;