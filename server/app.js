const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const routes = require('/Users/allenharper/Documents/Fullstack Academy/Junior Phase/start-enviornment/server/api/')


// static middleware
app.use(express.static(path.join(__dirname, '..','public')))
app.use(cors());
app.use('/api', routes);

// app.use((err,req,res)=>{
//   console.log("error is", err.status);
//   res.send(err.message);
// })


app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

