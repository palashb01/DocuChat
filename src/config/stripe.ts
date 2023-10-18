const PLANS = [
  {
    name: "Free",
    slug: "free",
    quota: 10,
    pagesPerPdf: 5,
    price: {
      amount: 0,
      priceIds: {
        test: "",
        production: "",
      },
    },
  },
  {
    name: "Pro",
    slug: "pro",
    quota: 100,
    pagesPerPdf: 25,
    price: {
      amount: 14,
      priceIds: {
        test: "price_1O2LXiSEG0rJ7EaTDwmC5QtL",
        production: "",
      },
    },
  },
];

export default PLANS;
