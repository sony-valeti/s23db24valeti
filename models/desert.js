const mongoose = require("mongoose")
const desertSchema = mongoose.Schema({
desert_type: String,
price: {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],
    max: [1000, 'Price cannot exceed 1000'],
  },
quantity:  {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],
    max: [100, 'Price cannot exceed 100'],
  }
})
module.exports = mongoose.model("desert",
desertSchema)