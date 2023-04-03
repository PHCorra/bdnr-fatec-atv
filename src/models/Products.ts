import mongoose, { Document } from "mongoose";

const productsSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String, required: true },
  price:       { type: Number },
  quantity:    { type: Number }
})

export const Product = mongoose.model('Products', productsSchema)