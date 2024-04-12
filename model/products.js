import mongoose from "mongoose";
const { Schema } = mongoose;

const productsSchema = new Schema({
  //title: String, // String is shorthand for {type: String}
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: [0, "Wrong Discount"] },
  discountPercentage: { type: Number, min: [0, "Wrong Discount"], max: 50 },
  rating: { type: Number, min: [0, "Wrong Rating"], max: 20, default: 0 },
  brand: { type: String },
  category: { type: String, required: true },
  thumbnail: String,
  images: [String],
});
const Product = mongoose.model("Product", productsSchema); // ('Collection name in Database' , & it's schema )

export default Product;
