const router = require("express").Router();

const {postSignUp, postLogIn} = require('../controllers/auth.controller');

//router.get("/api/signup", userRegistered);
router.post("/api/signup", postSignUp);

router.post("/api/login", postLogIn);

module.exports = router;