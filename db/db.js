const mongoose = require('mongoose');

//move this to .env at some point
const connectionString = 'mongodb://localhost/tottasker'

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true
	// create index
	// find and modify
})

mongoose.connection.on('connected', () => {
	console.log('connected to db: ' + connectionString);
})

mongoose.connection.on('disconnected', () => {
	console.log('disconnected from the db');	
})

mongoose.connection.on('error', (error) => {
		console.log('error with db:, error');
})