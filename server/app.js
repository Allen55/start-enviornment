const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const characterRouter = require('./routes/characters');
const carRouter = require('./routes/car');

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use('/api/characters', characterRouter);
app.use('/api/cars', carRouter);

app.use((err,req,res)=>{
  console.log("error is", err.status);
  res.send(err.message);
})

app.use(cors())

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

