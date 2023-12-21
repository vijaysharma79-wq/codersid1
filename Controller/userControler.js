// // const { userModal1 } = require("../../NodeStart18/Models/UserModal")
// const { companyModel } = require("../Modals/CompanyModel")
// const { userModa2 } = require("../Modals/UserModal")


// const Createuser = async (req, res) => {

//     let user = await userModa2.create(req.body)
//     if (user) {
//         res.send("already")
//     }
//     res.send(user)
//     // console.log(user)



// }
// const login = async (req, res) => {
//     let(email, password) = req.body;
//     let user = await userModa2.findOne({ email: email })
//     if (!user) {
//         return res.status(409).send({ success: false, message: " not sucees" })
//     }
//     res.status(201).send({ success: true, message: "sucess" })
// }

// const createCompamy = async (req, res) => {

//     let user = await companyModel.create(req.body)
//     if (user) {
//         res.send("already")
//     }
//     res.send(user)
//     // console.log(user)



// }


// module.exports = { Createuser, login,createCompamy }