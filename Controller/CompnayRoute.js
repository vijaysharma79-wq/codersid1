const express = require('express')
const { companyModel } = require('../Modals/CompanyModel')
const compnayRoutes = express.Router()
const Companylist = express.Router()


compnayRoutes.post("/", async (req, res) => {
    let oldCompany = await companyModel.findOne({ companyName: req.body.companyName })
    if (oldCompany) { return res.status(401).send({ success: false, message: "company already exsist" }) }
    let newcompnay = await companyModel.create(req.body)
    res.status(201).send({ success: true, message: "compnay created", data: newcompnay })
})
Companylist.get("/", async (req, res) => {
    let compnayList = await companyModel.find()
    console.log(compnayList.length)
    if (compnayList.length == 0) { return res.status(404).send({ success: false, message: "compnay not found" }) }
    res.status(200).send({ success: true, message: "all company", data: compnayList.length })


})
module.exports = { compnayRoutes, Companylist }
