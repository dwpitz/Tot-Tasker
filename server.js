const express = require('express');
console.log(process.env);
const app = express();
//Move this to .env at some point
const PORT = 3000;

require('./db/db')

//Middleware
app.use(express.static('public'))

app.listen(PORT, () => {
	console.log('The Server is Listening on Port ' + PORT);
})