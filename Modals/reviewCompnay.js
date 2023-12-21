const mongoose = require("mongoose")
const reviewSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            require: true,
        },
        review: {
            type: String,
            require: true,
            default: false
        },
        rating: {
            type: String,
            require: true,
        }, isActive: {
            type: Boolean,
            default: true
        },
        compnay_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "companymodel"


        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "companyMode;",

        }
    },
    { timestamps: true }
)
const ReviewSchema = mongoose.model("ReviewSchema", reviewSchema)

module.exports = { ReviewSchema }