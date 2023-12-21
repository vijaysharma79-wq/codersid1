const express = require("express")
// const { userRoutes } = require("./Controller/UserRouter")
const { compnayRoutes, Companylist } = require("./Controller/CompnayRoute")

require('./dbconnection/Connection')


const App = express()
const Port = 5000

App.use(express.json())

// App.use('/vijay', userRoutes)
// App.use('/login', userRoutes)
App.use('/company', compnayRoutes)
App.use('/companylist', Companylist)





App.listen(Port, () => {
    console.log(`server is running${Port}`)
})