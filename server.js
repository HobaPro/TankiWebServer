const express = require("express");
const app = express();

require("dotenv").config();
const cors = require("cors");

app.use(cors({
    origin: '*',
}));

app.use(express.json());

const authRouter = require("./routes/auth.route");

app.use(authRouter);

app.listen(process.env.PORT, err => {
    try{
        if(err) throw err;
    }
    catch(err){
        console.log(err);
    }
})