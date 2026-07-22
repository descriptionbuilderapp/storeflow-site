import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore StoreFlow wholesale order rules, customer access controls, quick ordering, and checkout validation.",
};

const groups = [
  {
    title: "Order policies",
    description: "Create purchasing requirements that match your wholesale business.",
    items: [
      "Minimum Order",
      "Customer Tagged Minimum Order",
      "Product MOQ",
      "Variant MOQ",
      "Collection MOQ",
      "Saved Rule Sets",
    ],
  },
  {
    title: "Customer access",
    description: "Control who can see prices and complete wholesale purchases.",
    items: [
      "Customer Tag Rules",
      "Hide Prices",
      "Hide Add to Cart",
      "Hide Buy Now",
      "Optional Checkout Block",
    ],
  },
  {
    title: "Purchasing experience",
    description: "Help wholesale buyers order more efficiently.",
    items: ["Quick Order", "Checkout Validation"],
  },
  {
    title: "Operations",
    description: "Manage StoreFlow configuration from one place.",
    items: ["Dashboard", "Customer Applicability"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Features
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Wholesale controls that work together
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          StoreFlow brings purchasing policies, customer restrictions, quick
          ordering, and checkout protection into one consistent platform.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-950">{group.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{group.description}</p>

            <ul className="mt-6 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
