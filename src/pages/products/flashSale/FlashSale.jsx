import { useEffect, useMemo, useState } from "react";
import {mockProducts as products} from "../../../data/mockProducts";
import { flashSaleStyles as s } from "./flashSale.styles";
import flashSaleHero from "../../../../public/images/flash-sale-hero-bg.jpg";

const categories = [
  {
    id: "all",
    label: "All Deals",
  },
  {
    id: "electronics",
    label: "Electronics",
  },
  {
    id: "fashion",
    label: "Fashion",
  },
  {
    id: "home",
    label: "Home",
  },
];

const INITIAL_COUNTDOWN =
  2 * 24 * 60 * 60 + // 2 days
  14 * 60 * 60 + // 14 hours
  45 * 60 + // 45 minutes
  25; // 25 seconds

export default function FlashSale() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [timeLeft, setTimeLeft] = useState(INITIAL_COUNTDOWN);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }

        return currentTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const countdown = getCountdownValues(timeLeft);

  const saleProducts = useMemo(() => {
    const discountedProducts = products.filter(
      (product) =>
        typeof product.discount === "number" && product.discount > 0,
    );

    if (activeCategory === "all") {
      return discountedProducts.slice(0, 4);
    }

    if (activeCategory === "fashion") {
      return discountedProducts
        .filter(
          (product) =>
            product.category === "men" || product.category === "women",
        )
        .slice(0, 4);
    }

    return discountedProducts
      .filter((product) => product.category === activeCategory)
      .slice(0, 4);
  }, [activeCategory]);

  const upcomingDeals = useMemo(
    () => products.filter((product) => product.isNew).slice(0, 3),
    [],
  );

  return (
    <section className={s.page}>
      <FlashSaleHero countdown={countdown} />

      <div className={s.content.wrapper}>
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {saleProducts.length > 0 ? (
          <div className={s.content.grid}>
            {saleProducts.map((product) => (
              <SaleCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={s.emptyState.wrapper}>
            <h3 className={s.emptyState.title}>
              No discounted products found
            </h3>

            <p className={s.emptyState.description}>
              There are currently no active deals in this category.
            </p>
          </div>
        )}
      </div>

      <UpcomingDeals products={upcomingDeals} />
    </section>
  );
}

function FlashSaleHero({ countdown }) {
  return (
    <div
      className={s.hero.wrapper}
      style={{
        backgroundImage: `url(${flashSaleHero})`,
      }}
    >
      <div className={s.hero.overlay} />

      <div className={s.hero.content}>
        <span className={s.hero.badge}>Limited Time Only</span>

        <h2 className={s.hero.heading}>MEGA SALE UP TO 70%</h2>

        <div className={s.hero.countdown}>
          <CountdownBox value={countdown.days} label="Days" />
          <span className={s.hero.colon}>:</span>

          <CountdownBox value={countdown.hours} label="Hours" />
          <span className={s.hero.colon}>:</span>

          <CountdownBox value={countdown.minutes} label="Min" />
          <span className={s.hero.colon}>:</span>

          <CountdownBox value={countdown.seconds} label="Sec" />
        </div>
      </div>
    </div>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div className={s.countdownBox.box}>
      <p className={s.countdownBox.value}>{formatTime(value)}</p>
      <p className={s.countdownBox.label}>{label}</p>
    </div>
  );
}

function CategoryTabs({
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className={s.tabs.wrapper}>
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`${s.tabs.button} ${
              isActive ? s.tabs.active : s.tabs.inactive
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

function SaleCard({ product }) {
  const originalPrice =
    product.price / (1 - product.discount / 100);

  const claimedPercent = Math.min(
    95,
    40 + ((product.id * 13) % 56),
  );

  return (
    <article className={s.card.article}>
      <div className={s.card.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={s.card.image}
        />

        <span className={s.card.discountBadge}>
          -{product.discount}%
        </span>

        {product.isNew && (
          <span className={s.card.newBadge}>New</span>
        )}
      </div>

      <div className={s.card.body}>
        <p className={s.card.brand}>{product.brand}</p>

        <h3 className={s.card.title}>{product.name}</h3>

        <div className={s.card.ratingRow}>
          <span className={s.card.stars}>★</span>
          <span>{product.stars}</span>

          {typeof product.reviews === "number" && (
            <span className={s.card.reviews}>
              ({product.reviews} reviews)
            </span>
          )}
        </div>

        <div className={s.card.priceRow}>
          <span className={s.card.price}>
            ${product.price.toFixed(2)}
          </span>

          <span className={s.card.oldPrice}>
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        <div className={s.card.soldRow}>
          <span>Sold</span>
          <span>{claimedPercent}% claimed</span>
        </div>

        <div className={s.card.progressWrapper}>
          <div
            className={s.card.progressBar}
            style={{ width: `${claimedPercent}%` }}
          />
        </div>

        <button type="button" className={s.card.button}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

function UpcomingDeals({ products }) {
  const unlockTimes = ["04:12:00", "12:00:00", "24:00:00"];

  return (
    <section className={s.upcoming.section}>
      <div className={s.upcoming.wrapper}>
        <h2 className={s.upcoming.title}>Upcoming Deals</h2>

        <div className={s.upcoming.grid}>
          {products.map((product, index) => (
            <UpcomingDealCard
              key={product.id}
              product={product}
              time={unlockTimes[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingDealCard({ product, time }) {
  return (
    <article className={s.upcoming.article}>
      <div className={s.upcoming.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={s.upcoming.image}
        />

        <div className={s.upcoming.overlay}>
          <span className={s.upcoming.lock} aria-hidden="true">
            🔒
          </span>

          <p className={s.upcoming.unlockText}>Unlocks In</p>
          <p className={s.upcoming.time}>{time}</p>

          <button
            type="button"
            className={s.upcoming.notifyButton}
          >
            Notify Me
          </button>
        </div>
      </div>

      <div className={s.upcoming.info}>
        <h3 className={s.upcoming.name}>{product.name}</h3>
        <p className={s.upcoming.hiddenPrice}>???</p>
      </div>
    </article>
  );
}

function getCountdownValues(totalSeconds) {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));

  const hours = Math.floor(
    (totalSeconds % (24 * 60 * 60)) / (60 * 60),
  );

  const minutes = Math.floor(
    (totalSeconds % (60 * 60)) / 60,
  );

  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function formatTime(value) {
  return String(value).padStart(2, "0");
}