const express = require('express')
const { createCompamy } = require('../Controller/userControler')

const userRoutes = express.Router()
// console.log(Createuser)

// userRoutes.post('/', Createuser)
// userRoutes.post('/', login)
// userRoutes.post('/', createCompamy)



module.exports = { userRoutes };