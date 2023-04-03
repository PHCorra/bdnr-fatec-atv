import mongoose, { Document } from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: [{type: String}],
  favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Favorites'}],
  purchases: [{type: mongoose.Schema.Types.ObjectId, ref: 'Purchases'}],
})

export const User = mongoose.model('User', usersSchema)