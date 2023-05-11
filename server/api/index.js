const characterRouter = require('./routes/character.js');
const carRouter  = require('./routes/car.js');
const express = require('express');
const router = express.Router();

router.use('/cars', carRouter);
router.use('/characters', characterRouter);

router.get('/', (req, res, next) => {
    res.send('at /api')
})


module.exports = router;