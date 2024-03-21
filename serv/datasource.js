import { DataSource } from "apollo-datasource";
import Product from "./models/product.js";

class ProductAPI extends DataSource {
  constructor() {
    super();
  }

  async getProducts({ after = 0, first, sort }) {
    // "after" is the starting index for slice(),
    // first is the end index

    var sortObject = {};

    const sortMap = {
      "Rating ↓": { rating: -1 },
      "Rating ↑": { rating: 1 },
      "Alpha ↓": { title: 1 },
      "Alpha ↑": { title: -1 },
    };

    if (sort in sortMap) {
      sortObject = sortMap[sort];
    }

    const products = await Product.find().sort(sortObject);

    const totalCount = products.length;
    const edges = products.slice(after, first).map((product) => ({
      node: product,
      cursor: product._id.toString(), // Not actually used by the program as of now
    }));

    // This boolean is getting calculated & returned correctly.
    // Need to look into why "load more" button is
    // still showing even when hasNextPage returns false
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
