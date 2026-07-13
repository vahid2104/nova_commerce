export const flashSaleStyles = {
  page: "min-h-screen bg-[#faf7f8] text-nova-black",

  hero: {
  wrapper:
    "relative flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[360px]",

  overlay:
    "absolute inset-0 bg-white/20",

  content:
    "relative z-10 flex w-full flex-col items-center justify-center px-5 text-center",

  badge:
    "rounded-full bg-red-100 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-red-600",

  heading:
    "mt-4 text-3xl font-black tracking-tight text-nova-black md:text-4xl lg:text-5xl",

  countdown:
    "mt-8 flex items-start justify-center gap-2 sm:gap-3",

  colon:
    "mt-3 text-xl font-black text-gray-500 sm:text-2xl",
  },

  countdownBox: {
    box:
      "min-w-[58px] rounded-md border border-gray-200 bg-white px-3 py-3 text-center shadow-sm sm:min-w-[70px] sm:px-4",

    value:
      "text-xl font-black leading-none text-nova-black sm:text-2xl",

    label:
      "mt-2 text-[9px] font-bold uppercase tracking-wide text-gray-500",
  },

  content: {
    wrapper:
      "mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16",

    grid:
      "mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
  },

  tabs: {
    wrapper:
      "flex gap-5 overflow-x-auto border-b border-gray-300 sm:gap-10",

    button:
      "shrink-0 border-b-2 px-1 pb-4 text-xs font-bold uppercase tracking-wide transition-colors duration-200",

    active:
      "border-nova-black text-nova-black",

    inactive:
      "border-transparent text-gray-500 hover:text-nova-black",
  },

  card: {
    article:
      "overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md",

    imageWrapper:
      "relative h-[280px] overflow-hidden rounded-lg bg-gray-100",

    image:
      "h-full w-full object-cover transition duration-500 hover:scale-105",

    discountBadge:
      "absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold text-white",

    newBadge:
      "absolute right-3 top-3 rounded-full bg-nova-black px-3 py-1 text-[10px] font-bold uppercase text-white",

    body:
      "px-3 pb-3 pt-4",

    brand:
      "text-[11px] font-semibold uppercase tracking-wide text-gray-500",

    title:
      "mt-1 min-h-[40px] text-sm font-semibold leading-5 text-nova-black",

    ratingRow:
      "mt-2 flex items-center gap-1 text-xs text-gray-600",

    stars:
      "text-yellow-500",

    reviews:
      "ml-1 text-gray-400",

    priceRow:
      "mt-3 flex flex-wrap items-center gap-2",

    price:
      "text-xl font-black text-red-600",

    oldPrice:
      "text-sm text-gray-400 line-through",

    soldRow:
      "mt-5 flex items-center justify-between text-[9px] font-semibold uppercase tracking-wide text-gray-500",

    progressWrapper:
      "mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200",

    progressBar:
      "h-full rounded-full bg-red-600 transition-[width] duration-500",

    button:
      "mt-5 w-full rounded-md bg-nova-black py-3.5 text-sm font-semibold text-white transition-colors hover:bg-nova-purple",
  },

  upcoming: {
    section:
      "bg-[#f5f2f3] py-16 lg:py-20",

    wrapper:
      "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10",

    title:
      "text-2xl font-bold tracking-tight text-nova-black",

    grid:
      "mt-9 grid grid-cols-1 gap-6 md:grid-cols-3",

    article:
      "rounded-xl border border-gray-300 bg-[#faf7f8] p-4",

    imageWrapper:
      "relative h-[310px] overflow-hidden rounded-lg bg-white",

    image:
      "h-full w-full object-cover opacity-20 blur-[2px] grayscale",

    overlay:
      "absolute inset-0 flex flex-col items-center justify-center bg-white/25 px-4 text-center",

    lock:
      "mb-3 text-2xl",

    unlockText:
      "text-[10px] font-bold uppercase tracking-wide text-gray-500",

    time:
      "mt-1 text-xl font-black text-nova-black",

    notifyButton:
      "mt-6 rounded-md border border-nova-black bg-white px-7 py-3 text-sm font-semibold text-nova-black transition-colors hover:bg-nova-black hover:text-white",

    info:
      "mt-4 text-center opacity-30",

    name:
      "text-sm font-bold text-nova-black",

    hiddenPrice:
      "mt-1 text-lg font-black text-nova-black",
  },

  emptyState: {
    wrapper:
      "mt-10 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center",

    title:
      "text-xl font-bold text-nova-black",

    description:
      "mt-2 text-sm text-gray-500",
  },
};