//include Express
const express = require('express');
const http = require('http');
//set port
const port = 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send(`
	    <h1>Praman's my home page</h1>
      <p>Welcome to the P party!</p>
  `);

});

app.get('/about',(req,res)=>{
    res.send(`
	    <h1>Here's Praman's Express About Page</h1>
      <p>Welcome to Express!</p>
  `);

});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
