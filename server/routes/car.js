const router = require('express').Router();
const {Car}= require('../db');

// grabs all car
router.get('/', async (req,res,next)=>{
    try{
        const car = await Car.findAll();
        res.send(car);
    }catch(e){
        next(e)
    }
})

//grabs Car by id
router.get('/:id', async (req,res,next)=>{
    try{
        const car = await Car.findByPk(req.params.id);
        res.send(car)
    }catch(e){
        next(e)
    }
})

module.exports=  router;