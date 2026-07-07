import "./ShoppingCart.css";

const cartProducts = [
  {
    id: 1,
    name: "Cashmere Blend Knit",
    price: "$320.00",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
    badge: "Price dropped 15%",
    badgeTone: "success",
  },
  {
    id: 2,
    name: "Aura Crossbody Bag",
    price: "$450.00",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=80",
    badge: "Back in stock!",
    badgeTone: "dark",
  },
  {
    id: 3,
    name: "Monolith Lamp",
    price: "$145.00",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    status: "Out of stock",
    disabled: true,
  },
  {
    id: 4,
    name: "Slim Cardholder",
    price: "$85.00",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80",
  },
];

const ShoppingCart = () => {
  return (
    <main className="shopping-cart-page" aria-label="Shopping cart">
      <section className="cart-product-grid">
        {cartProducts.map((product) => (
          <article
            className={`cart-product-card${product.disabled ? " is-disabled" : ""}`}
            key={product.id}
          >
            <div className="cart-product-media">
              {product.badge ? (
                <span className={`cart-product-badge ${product.badgeTone}`}>
                  {product.badge}
                </span>
              ) : null}

              {product.status ? (
                <span className="cart-product-status">{product.status}</span>
              ) : null}

              <img src={product.image} alt={product.name} />
            </div>

            <div className="cart-product-info">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>

            <button className="cart-product-button" disabled={product.disabled}>
              {product.disabled ? "Notify me" : "Add to cart"}
            </button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ShoppingCart;
