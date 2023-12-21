const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: { type: String, },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true }


})
// const loginSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     password: { type: String, required: true }
// })
const userModa2 = new mongoose.model("userModa2", UserSchema)
// const userLogin = new mongoose.model("userLogin", UserSchema)


module.exports = { userModa2 }