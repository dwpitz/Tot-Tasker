const express = require('express');
console.log(process.env);
const app = express();
const PORT = 3000;

//Middleware
app.use(express.static('public'))

app.listen(PORT, () => {
	console.log('The Server is Listening on Port ' + PORT);
})