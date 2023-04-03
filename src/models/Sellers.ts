import mongoose, { Document } from "mongoose";

const sellersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products'}],
})

export const Sellers = mongoose.model('Sellers', sellersSchema)
