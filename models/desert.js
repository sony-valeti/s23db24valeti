const mongoose = require("mongoose")
const desertSchema = mongoose.Schema({
desert_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("desert",
desertSchema)