import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Install, configure, and verify StoreFlow on Shopify.",
};

const steps = [
  [
    "Install StoreFlow",
    "Install StoreFlow on your Shopify store and approve the requested permissions. Open the StoreFlow Dashboard from Shopify Admin.",
  ],
  [
    "Enable StoreFlow Cart Guard",
    "Open the Shopify theme editor, go to App embeds, enable StoreFlow Cart Guard, and save. Cart Guard powers storefront warnings, access controls, and checkout-button protection.",
  ],
  [
    "Configure purchasing rules",
    "Create a Minimum Order rule, MOQ rules, or both. Only enabled rules are enforced.",
  ],
  [
    "Configure customer access",
    "Use Hide Prices to control price visibility and purchasing access for guests or customer-tag groups.",
  ],
  [
    "Configure Quick Order",
    "Enable Quick Order, choose the product source and visible columns, then add the StoreFlow Quick Order app block to the desired theme template.",
  ],
  [
    "Verify the storefront",
    "Test passing and failing carts, matching and non-matching customer tags, Quick Order, and checkout validation before launch.",
  ],
];

export default function GettingStartedPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
      <Link href="/docs" className="text-sm font-semibold text-emerald-700">
        ← Back to documentation
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Getting started
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Set up StoreFlow
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        Follow this recommended setup order and verify the customer experience
        before launch.
      </p>

      <div className="mt-14 space-y-6">
        {steps.map(([title, body], index) => (
          <section
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800">
                {index + 1}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{body}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
