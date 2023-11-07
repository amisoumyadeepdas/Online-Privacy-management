const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//REGISTER
router.post("/register", async (req, res) => {
    console.log("sjhjkhcjhcdhclkdjclkj",req.body)
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
console.log(hashedPassword);
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
console.log(newUser);
        //save user and respond
        const user = await newUser.save();
        console.log(user)
        return res.status(200).json(user);
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message:err.message})
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(404).json("user not found");
        }

        else if (await bcrypt.compare(req.body.password, user.password) == false)
            res.status(400).json("wrong password")

        else {
            res.status(200).json(user)
        }
    }

    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;