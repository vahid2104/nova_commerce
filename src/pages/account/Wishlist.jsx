import ProductCard from "../../components/product/ProductCard";
import WishlistContentHeader from "../../components/wishlist/WishlistContentHeader";
import WishlistTabs from "../../components/wishlist/WishlistTabs";
import { wishlistProducts } from "../../data/wishlistProducts";

export default function Wishlist() {
  const handleAddToCart = (product) => {
    // Hook up to cart store when checkout flow is ready.
    console.info("Add to cart:", product.name);
  };

  return (
    <section aria-label="My Wishlist">
      <WishlistContentHeader itemCount={wishlistProducts.length} />
      <WishlistTabs />

      <div className="mt-6 grid auto-rows-fr grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {wishlistProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
}
