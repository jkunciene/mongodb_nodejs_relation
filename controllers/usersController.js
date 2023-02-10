const User = require('../models/User');

const createUser = async(req, res)=>{

    if(!req.body.name || !req.body.about) res.status(404).send("Not Found");

    const user = new User({
        name: req.body.name,
        about: req.body.about
    });

    const result = await user.save();
    res.status(200).send(result);

}

module.exports = {
    createUser
}