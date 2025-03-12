import { generateFakeProduct } from "~/utils/generate";
import type { Product } from "~/utils/generate";

export default defineCachedEventHandler(
  (event) => {
    // const name = getRouterParam(event, 'slug')
    const products: Product[] = [];
    while (products.length < 12) {
      products.push(generateFakeProduct());
    }
    return {
      products,
    };
  },
  {
    base: "catalogs",
    getKey: () => "recepies",
    maxAge: 3600,
    staleMaxAge: 3600,
  }
);
