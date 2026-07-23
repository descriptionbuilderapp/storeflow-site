import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minimum Order Guide",
  description: "Configure StoreFlow minimum order rules.",
};

export default function MinimumOrderGuide() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
      <Link href="/docs" className="text-sm font-semibold text-emerald-700">
        ← Back to documentation
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Minimum Order
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        Create minimum purchase requirements for the entire cart, selected products, variants, or collections. This feature is included at no additional charge during Internal Beta.
      </p>

      <div className="mt-12 space-y-9 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Set up a rule</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Open Minimum Order in StoreFlow.</li>
            <li>Enable minimum order.</li>
            <li>Choose Entire cart, Specific products, or Specific collections.</li>
            <li>Add the minimum amount and select customer applicability.</li>
            <li>Enable the rule and save your settings.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">How rules apply</h2>
          <p className="mt-3">
            Entire-cart rules check the full cart subtotal. Product and variant
            rules check the subtotal for the selected item. Collection rules
            check the subtotal of products that belong to the selected collection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Customer targeting</h2>
          <p className="mt-3">
            Rules can apply to all customers or to customers with selected tags.
            Every applicable enabled rule must be satisfied before checkout.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-semibold text-slate-950">Test before launch</h2>
          <p className="mt-3">
            Test a cart below the minimum, a cart that passes, and customer accounts with and without the configured tags. StoreFlow is intended to assist with storefront order enforcement and does not guarantee that every non-compliant order will be prevented in every customized environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Current Internal Beta guidance</h2>
          <p className="mt-3">Carts containing up to 50 distinct products are within the current recommended onboarding range. Larger carts require additional validation.</p>
        </section>
      </div>
    </article>
  );
}
