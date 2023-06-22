const express = require('express')
const User = require('../models/User')
const router = express.Router()

//Update User Profile

router.put('/:id' , async (req , res) =>{

    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id , req.body)

        if(!user){
            return res.status(404).json({message : `Can not find any user with ID ${id}`})
        }

        const updatedUser = await User.findById(id)
        res.status(200).json(updatedUser)
    } catch (error) {
         res.status(500).json({message : error.message})
    }


})




module.exports = router
