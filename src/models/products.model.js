import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
  reference: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, { versionKey: false });

const Products = new mongoose.model('products', productsSchema);

export default Products;
