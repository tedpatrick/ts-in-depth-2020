import express from "express";
const app = express();

const {
	PORT = 3000
} = process.env;

app.get( '/', (req, res) => {
	console.log( req.path );
	res.send('/ home');
});

app.listen( PORT, () => {
	console.log(`Serving on port ${PORT}!`)
});