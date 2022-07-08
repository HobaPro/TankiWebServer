const {createNewUser, logIn} = require('../models/auth.model');

async function postSignUp(req, res, next){
    console.log(req.body);
    const user = await createNewUser(req.body.userName, req.body.password);
    res.send(user);
}

async function postLogIn(req, res, next){
    console.log(req.body);
    const user = await logIn(req.body.userName, req.body.password);
    res.send(user);
}

module.exports = {
    postSignUp,
    postLogIn,
}