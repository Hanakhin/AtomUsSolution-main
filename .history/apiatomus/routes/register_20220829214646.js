const express = require('express')
const Register = require('../models/register')
const router = require('./posts')


router.get('/register',(req,res)=>{
    
})
//submit a user
router.post('/', async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
    try {
        const savedUser = await user.save()
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }

})

//get back a specific user

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (err) {
        res.json({ message: err });
    }

})

//delete a user
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.deleteMany({ _id: req.params.userId })
        res.json(removedUser)
    } catch (err) {
        res.json({ message: err })
    }
})

//update a user 

router.patch('/:userId' , async (req,res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            {$set:{username:req.body.username}}
    )
        res.json(updatedUser)
    }catch(err){
        res.json({message:err})
    }
})

module.exports