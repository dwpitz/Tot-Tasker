const express = require('express');
const app = express();
//Move this to .env at some point
const PORT = 3000;
const session = require('express-session')
require('./db/db')
const bodyParser = require('body-parser')

//Middleware
app.use(session({
	//Change this to use the .env file
	secret: "tunafish",
	resave: false,
	saveUninitialized: false
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

//Controllers
const familyController = require('./controllers/family.js')
app.use('/family', familyController)
const totsController = require('./controllers/tots.js')
app.use('/tots', totsController)
const tasksController = require('./controllers/tasks.js')
app.use('/tasks', tasksController)



app.listen(PORT, () => {
	console.log('The Server is Listening on Port ' + PORT);
})