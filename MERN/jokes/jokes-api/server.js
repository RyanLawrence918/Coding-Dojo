//import express
const express = require("express");

const port = 8000;

//initialize express application and reference it using variable "app"
const app = express();

require("./server/config/mongoose.config")

//needs to be above app.get or app.post code block
//before routes but after app is defined and 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//import route to server
require("./server/routes/joke.routes")(app)

//this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`));