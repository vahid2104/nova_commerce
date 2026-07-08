import React from "react";
import { LayoutGrid, List, ChevronDown, X, Heart } from "lucide-react";

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
    img: "https://images.unsplash.com/photo-1595425964272-4bce9a97e42d?w=600&q=80",
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
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-[#f4f2ee] overflow-hidden mb-3">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
          <Heart size={15} strokeWidth={1.5} />
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
          className={`text-[14px] font-semibold ${p.oldPrice ? "text-red-600" : "text-neutral-900"}`}
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

export default function WomenDresses() {
  const [size, setSize] = React.useState("S");
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    "#000000",
    "#ffffff",
    "#d9c9ae",
    "#2b2b3d",
    "#5b4bff",
    "#c0392b",
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-8 py-8 flex gap-10">
      <aside className="w-[220px] shrink-0 hidden lg:block">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-[15px]">Filters</h3>
          <button className="text-[12px] text-neutral-400 hover:text-neutral-700">
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
              value="200"
              className="w-full border border-neutral-300 rounded px-2 py-1.5 text-[13px]"
            />
            <span className="text-neutral-400">-</span>
            <input
              readOnly
              value="700"
              className="w-full border border-neutral-300 rounded px-2 py-1.5 text-[13px]"
            />
          </div>
        </FilterSection>

        <FilterSection title="SIZE">
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`w-9 h-9 text-[13px] rounded border transition ${
                  size === s
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
                className="w-6 h-6 rounded-full border border-neutral-200 ring-offset-2 hover:ring-2 hover:ring-neutral-300 transition"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </FilterSection>
      </aside>

      <main className="flex-1">
        <div className="text-[12px] text-neutral-400 mb-3">
          Home <span className="mx-1">›</span> Women{" "}
          <span className="mx-1">›</span>{" "}
          <span className="text-neutral-700">Dresses</span>
        </div>

        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-1">Women's Dresses</h1>
            <p className="text-[13px] text-neutral-400">342 products</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-neutral-300 rounded-lg px-4 py-2 text-[13px]">
              Sort by: Relevance <ChevronDown size={14} />
            </button>
            <div className="flex border border-neutral-300 rounded-lg overflow-hidden">
              <button className="p-2 bg-neutral-100">
                <LayoutGrid size={16} />
              </button>
              <button className="p-2">
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <span className="flex items-center gap-1.5 bg-neutral-100 text-[12px] px-3 py-1.5 rounded-full">
            Size: S <X size={12} className="cursor-pointer" />
          </span>
          <span className="flex items-center gap-1.5 bg-neutral-100 text-[12px] px-3 py-1.5 rounded-full">
            $200 - $700 <X size={12} className="cursor-pointer" />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[13px] text-neutral-400 mb-4">
            Showing 9 of 342 products
          </p>
          <button className="border border-neutral-300 rounded-lg px-8 py-2.5 text-[13px] font-medium hover:bg-neutral-50 transition">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
}
