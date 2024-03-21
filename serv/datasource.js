import { DataSource } from "apollo-datasource";
import Product from "./models/product.js";

class ProductAPI extends DataSource {
  constructor() {
    super();
  }

  async getProducts({ after = 0, first, sort }) {
    // "after" is the starting index for slice(),
    // first is the
    var sortObject = {};

    const sortMap = {
      "Rating ↓": { rating: -1 },
      "Rating ↑": { rating: 1 },
      "Alpha ↓": { title: 1 },
      "Alpha ↑": { title: -1 },
    };

    if (sort in sortMap) {
      console.log("sort matched");
      sortObject = sortMap[sort];
    }

    const products = await Product.find().sort(sortObject);

    console.log("products is " + products);
    const totalCount = products.length;
    const edges = products.slice(after, first).map((product) => ({
      node: product,
      cursor: product._id.toString(), // Assuming cursor based on product ID
    }));

    const hasNextPage = products.length > first;
    const endCursor = products.length;
    return {
      edges,
      pageInfo: {
        hasNextPage,
        endCursor,
      },
    };
  }
}

export default ProductAPI;
