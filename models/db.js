const mongoose = require('mongoose');

const DB_URL = `mongodb+srv://HobaPro:HoHo_123@cluster0.mzrbn.mongodb.net/?retryWrites=true&w=majority`;

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('user', userSchema);

async function connectDB(){

    try{
        await mongoose.connect(DB_URL);
    } catch(err){
        if(err) console.log(err);
    }
}

async function saveUser(userName, password){
    try{
        const user = new User({
            userName: userName,
            password: password
        })

        await user.save();
        mongoose.disconnect();
        return user;
    } catch(err){
        console.log(err);
        mongoose.disconnect();
    }
}

module.exports = {
    connectDB,
    saveUser,
    User
}