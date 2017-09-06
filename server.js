const express = require("express");

const app = express();

app.use(express.static("."));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/main.html");
})

app.listen(8080, () => {
	console.log("App listening on port 8080")
});