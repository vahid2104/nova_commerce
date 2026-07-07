import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, image, badge, badgeTone, status, disabled } = product;

  return (
    <article className={`product-card${disabled ? " is-disabled" : ""}`}>
      <div className="product-card-media">
        {badge ? (
          <span className={`product-card-badge ${badgeTone ?? ""}`}>{badge}</span>
        ) : null}

        {status ? <span className="product-card-status">{status}</span> : null}

        <img src={image} alt={name} loading="lazy" />
      </div>

      <div className="product-card-info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>

      <button
        type="button"
        className="product-card-button"
        disabled={disabled}
        onClick={() => !disabled && onAddToCart?.(product)}
      >
        {disabled ? "Notify me" : "Add to cart"}
      </button>
    </article>
  );
}
