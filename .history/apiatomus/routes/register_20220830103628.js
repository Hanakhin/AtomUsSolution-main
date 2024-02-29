const express = require('express')
const router = express.Router();
const Register = require('../models/Register')


router.get('/register', async (req,res)=>{
    try{
        const registerUser = await 
    }
})
//submit a user
router.post('/', async (req, res) => {

    const register = new Register({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
    try {
        const savedUser = await register.save()
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }

})

//get back a specific user



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

module.exports = router;