import mongoose from "mongoose";
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    detail: String,
    img: String,
    rating: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
export default Product;
