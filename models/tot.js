const mongoose = require('mongoose')

const totSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	imageURL: String,
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task' //<-- I am unsure if this should be plural.
	}],
})

const Tot = mongoose.model('Tot', totSchema);
module.exports = Tot;