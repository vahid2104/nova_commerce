import { useState } from "react";

const IconLayoutGrid = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const IconList = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const IconChevronDown = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconX = ({ size = 12, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconHeart = ({ size = 15, strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconImage = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

const IconUser = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconBag = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const products = [
  {
    id: 1,
    brand: "ACNE STUDIOS",
    name: "Asymmetric Midi Dress",
    price: 450,
    oldPrice: null,
    rating: 4,
    reviews: 24,
    badge: "NEW",
    colorDots: ["#1c1c2b", "#e8e2d6"],
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
  },
  {
    id: 2,
    brand: "THE ROW",
    name: "Silk Maxi Dress",
    price: 890,
    oldPrice: 1112,
    rating: 5,
    reviews: 112,
    badge: "-20%",
    colorDots: ["#f2ede1"],
    img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
  },
  {
    id: 3,
    brand: "TOTEME",
    name: "Tailored Blazer Dress",
    price: 620,
    oldPrice: null,
    rating: 4,
    reviews: 8,
    badge: null,
    colorDots: ["#111"],
    img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=80",
  },
  {
    id: 4,
    brand: "STELLA MCCARTNEY",
    name: "Floral Print Dress",
    price: 780,
    oldPrice: null,
    rating: 5,
    reviews: 45,
    badge: "NEW",
    colorDots: ["#e8d5b5", "#3a2c1e"],
    img: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=80",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-black text-[11px] leading-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <div className="group cursor-pointer max-w-[260px] mx-auto">
      {" "}
      <div className="relative aspect-[3/4] bg-white overflow-hidden mb-3">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
        {p.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-sm ${
              p.badge === "NEW" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {p.badge}
          </span>
        )}
        <button
          aria-label="Sevimlilərə əlavə et"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition"
        >
          <IconHeart size={15} strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex items-center gap-1.5 mb-1">
        <Stars count={p.rating} />
        <span className="text-[11px] text-neutral-400">({p.reviews})</span>
      </div>
      <p className="text-[11px] tracking-wide text-neutral-500 font-medium mb-0.5">
        {p.brand}
      </p>
      <h3 className="text-[14px] text-neutral-900 mb-1.5">{p.name}</h3>
      <div className="flex items-center gap-2">
        <span
          className={`text-[14px] font-semibold ${
            p.oldPrice ? "text-red-600" : "text-neutral-900"
          }`}
        >
          ${p.price}
        </span>
        {p.oldPrice && (
          <span className="text-[13px] text-neutral-400 line-through">
            ${p.oldPrice}
          </span>
        )}
      </div>
      {p.colorDots && (
        <div className="flex gap-1 mt-2">
          {p.colorDots.map((c, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-neutral-200"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterSection({ title, children }) {
  return (
    <div className="border-b border-neutral-200 py-5">
      <h4 className="text-[11px] tracking-wider font-semibold text-neutral-500 mb-3">
        {title}
      </h4>
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="w-full max-w-full bg-white border-b border-neutral-200">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <div className="text-base sm:text-lg font-bold tracking-widest shrink-0">
          NOVA
        </div>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium overflow-x-auto">
          <a className="text-neutral-900 border-b-2 border-neutral-900 pb-1 whitespace-nowrap">
            WOMEN
          </a>
          <a className="text-neutral-500 hover:text-neutral-900 whitespace-nowrap">
            MEN
          </a>
          <a className="text-neutral-500 hover:text-neutral-900 whitespace-nowrap">
            ELECTRONICS
          </a>
          <a className="text-neutral-500 hover:text-neutral-900 whitespace-nowrap">
            HOME
          </a>
          <a className="text-neutral-500 hover:text-neutral-900 whitespace-nowrap">
            SALE
          </a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5 text-neutral-800 shrink-0">
          <IconImage size={18} />
          <IconHeart size={18} strokeWidth={1.8} />
          <IconBag size={18} />
          <IconUser size={18} />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full max-w-full bg-neutral-50 border-t border-neutral-200 mt-auto">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-10 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[13px]">
        <div>
          <div className="text-lg font-bold tracking-widest mb-3">NOVA</div>
          <p className="text-neutral-400 text-[12px]">
            © 2024 NOVA COMMERCE. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="space-y-2 text-neutral-600">
          <p>About Us</p>
          <p>Shipping & Returns</p>
        </div>
        <div className="space-y-2 text-neutral-600">
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="space-y-2 text-neutral-600">
          <p>Newsletter Signup</p>
        </div>
      </div>
    </footer>
  );
}

export default function WomenDresses() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 200, max: 700 });
  const [sortBy, setSortBy] = useState("Relevance");
  const [viewMode, setViewMode] = useState("grid");

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    "#000000",
    "#0f0d0d",
    "#d9c9ae",
    "#2b2b3d",
    "#5b4bff",
    "#c0392b",
  ];

  const sortOptions = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low",
    "Name",
  ];

  const clearAllFilters = () => {
    setSelectedSize("S");
    setSelectedColor(null);
    setPriceRange({ min: 200, max: 700 });
  };

  const handleSortChange = () => {
    const currentIndex = sortOptions.indexOf(sortBy);
    const nextIndex = (currentIndex + 1) % sortOptions.length;
    setSortBy(sortOptions[nextIndex]);
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        #root {
          width: 100%;
          overflow-x: hidden;
        }
        body {
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }
      `}</style>

      <div className="flex flex-col min-h-screen w-full max-w-full bg-white overflow-x-hidden">
        <Header />

        <div className="w-full max-w-full px-4 sm:px-6 lg:px-10 py-8 flex flex-col lg:flex-row gap-6 lg:gap-10 bg-white flex-1 overflow-x-hidden">
          <aside className="w-full lg:w-[220px] shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[15px]">Filters</h3>
              <button
                onClick={clearAllFilters}
                className="text-[12px] text-neutral-400 hover:text-neutral-700"
              >
                Clear all
              </button>
            </div>

            <FilterSection title="CATEGORY">
              <ul className="space-y-2 text-[13px]">
                <li className="flex justify-between text-blue-600 font-medium">
                  <span>Dresses</span>
                  <span>(342)</span>
                </li>
                <li className="flex justify-between text-neutral-600 pl-3">
                  <span>Mini Dresses</span>
                  <span className="text-neutral-400">(120)</span>
                </li>
                <li className="flex justify-between text-neutral-600 pl-3">
                  <span>Midi Dresses</span>
                  <span className="text-neutral-400">(150)</span>
                </li>
                <li className="flex justify-between text-neutral-600 pl-3">
                  <span>Maxi Dresses</span>
                  <span className="text-neutral-400">(72)</span>
                </li>
                <li className="flex justify-between text-neutral-700">
                  <span>Tops</span>
                  <span className="text-neutral-400">(415)</span>
                </li>
                <li className="flex justify-between text-neutral-700">
                  <span>Pants</span>
                  <span className="text-neutral-400">(210)</span>
                </li>
              </ul>
            </FilterSection>

            <FilterSection title="PRICE">
              <div className="h-1 bg-neutral-200 rounded-full mb-4 relative">
                <div className="absolute left-[15%] right-[35%] h-1 bg-neutral-900 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <input
                  readOnly
                  value={priceRange.min}
                  className="w-full border border-neutral-300 rounded px-2 py-1.5 text-[13px] bg-white text-black"
                />
                <span className="text-neutral-400">-</span>
                <input
                  readOnly
                  value={priceRange.max}
                  className="w-full border border-neutral-300 rounded px-2 py-1.5 text-[13px] bg-white text-black"
                />
              </div>
            </FilterSection>

            <FilterSection title="SIZE">
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-9 h-9 text-[13px] rounded border transition ${
                      selectedSize === s
                        ? "bg-black text-white border-black"
                        : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="COLOR">
              <div className="flex flex-wrap gap-2">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c)}
                    className={`w-6 h-6 rounded-full border-2 transition ${
                      selectedColor === c
                        ? "border-black ring-2 ring-offset-1 ring-neutral-300"
                        : "border-neutral-200 hover:ring-2 hover:ring-neutral-300"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </FilterSection>
          </aside>

          <main className="flex-1 min-w-0 overflow-x-hidden">
            <div className="text-[12px] text-neutral-400 mb-3">
              Home <span className="mx-1">›</span> Women{" "}
              <span className="mx-1">›</span>{" "}
              <span className="text-neutral-700">Dresses</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-black">
                  Women's Dresses
                </h1>
                <p className="text-[13px] text-neutral-500">342 products</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleSortChange}
                  className="flex items-center gap-2 border border-neutral-300 rounded-lg px-4 py-2 text-[13px] whitespace-nowrap hover:bg-neutral-50 transition"
                >
                  Sort by: {sortBy} <IconChevronDown size={14} />
                </button>
                <div className="hidden sm:flex border border-neutral-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition ${
                      viewMode === "grid"
                        ? "bg-neutral-200"
                        : "hover:bg-neutral-100"
                    }`}
                  >
                    <IconLayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition ${
                      viewMode === "list"
                        ? "bg-neutral-200"
                        : "hover:bg-neutral-100"
                    }`}
                  >
                    <IconList size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center gap-1.5 bg-neutral-100 text-[12px] px-3 py-1.5 rounded-full">
                Size: {selectedSize}{" "}
                <IconX
                  size={12}
                  className="cursor-pointer"
                  onClick={() => setSelectedSize("S")}
                />
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-100 text-[12px] px-3 py-1.5 rounded-full">
                ${priceRange.min} - ${priceRange.max}{" "}
                <IconX
                  size={12}
                  className="cursor-pointer"
                  onClick={() => setPriceRange({ min: 200, max: 700 })}
                />
              </span>
              {selectedColor && (
                <span className="flex items-center gap-1.5 bg-neutral-100 text-[12px] px-3 py-1.5 rounded-full">
                  <span
                    className="inline-block w-3 h-3 rounded-full border border-neutral-300"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <IconX
                    size={12}
                    className="cursor-pointer"
                    onClick={() => setSelectedColor(null)}
                  />
                </span>
              )}
            </div>

            <div
              className={`grid ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6px]"
                  : "grid-cols-1 gap-[6px]"
              }`}
            >
              {products.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-[13px] text-neutral-400 mb-4">
                Showing 4 of 342 products
              </p>
              <button className="border border-neutral-300 rounded-lg px-8 py-2.5 text-[13px] font-medium bg-white text-black hover:bg-black hover:text-white transition-colors">
                Load More
              </button>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
