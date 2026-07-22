import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hide Prices Guide",
  description: "Configure StoreFlow price visibility and purchasing access.",
};

export default function HidePricesGuide() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
      <Link href="/docs" className="text-sm font-semibold text-emerald-700">
        ← Back to documentation
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Hide Prices
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        Control which customers can see prices and purchase selected products.
      </p>

      <div className="mt-12 space-y-9 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Create a rule</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Open Hide Prices and enable the feature.</li>
            <li>Create a rule and choose the customers it applies to.</li>
            <li>Select all products, selected products, or selected collections.</li>
            <li>Choose which purchasing controls to restrict.</li>
            <li>Add the customer-facing message and save.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Available restrictions</h2>
          <ul className="mt-4 space-y-2">
            <li>Hide prices</li>
            <li>Hide Add to Cart</li>
            <li>Hide Buy Now</li>
            <li>Block checkout</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Matching rules</h2>
          <p className="mt-3">
            Matching rules combine their restrictions. Customer messages and
            hidden-price text come from the most specific matching rule.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-semibold text-slate-950">Test customer access</h2>
          <p className="mt-3">
            Test as a guest, an approved tagged customer, and a customer without
            the required tags.
          </p>
        </section>
      </div>
    </article>
  );
}
