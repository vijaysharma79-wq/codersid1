const mongoose = require("mongoose")
const CompanySchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            require: true,
        },
        location: {
            type: String,
            require: true,
            default: false
        },
        city: {
            type: String,
            require: true,
        },
        founded: {
            type: String,
            require: true,
        },
        isActive: {
            type: Boolean,
            default: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "companyMode;",

        },
        compay_logo: {
            type: String,

        },
    },
    { timestamps: true }
)
const companyModel = mongoose.model("companyModel", CompanySchema)

module.exports = { companyModel }