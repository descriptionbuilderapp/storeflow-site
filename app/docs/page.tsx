import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "StoreFlow setup and feature documentation.",
};

const docs = [
  ["Getting started", "Install, configure, and verify StoreFlow."],
  ["Minimum Order", "Set cart-value requirements for wholesale orders."],
  ["MOQ Rules", "Configure product, variant, and collection minimum quantities."],
  ["Hide Prices", "Control storefront pricing and purchasing access."],
  ["Quick Order", "Configure the streamlined wholesale ordering experience."],
  ["Release notes", "Review current features, improvements, and fixes."],
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Documentation
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Learn how to use StoreFlow
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Documentation is being prepared for the public release. The initial
          guide structure is available below.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {docs.map(([title, description]) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
            <p className="mt-5 text-sm font-semibold text-emerald-700">
              Guide coming soon
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
