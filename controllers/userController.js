const UserModel = require("../models/user");
module.exports.getUsers = async (req,res)=> {
    try {
        const user = await UserModel.find();
        res.status(200).render('users.ejs', {mydata: user})
    } catch(error) {
        res.status(404).render('users.ejs', {mydata: error.message})
    }
}

module.exports.addUser = (req,res)=> {
    const newUser = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save();
    res.redirect('/');
}