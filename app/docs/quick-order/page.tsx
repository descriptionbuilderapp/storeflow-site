import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quick Order Guide",
  description: "Configure the StoreFlow Quick Order experience.",
};

export default function QuickOrderGuide() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
      <Link href="/docs" className="text-sm font-semibold text-emerald-700">
        ← Back to documentation
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Quick Order
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        Give wholesale customers a faster way to browse products, enter
        quantities, and add multiple items to the cart.
      </p>

      <div className="mt-12 space-y-9 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Configure Quick Order</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Enable Quick Order.</li>
            <li>Choose all active products, selected collections, or selected products.</li>
            <li>Select the columns customers should see.</li>
            <li>Set rows per page and default quantity.</li>
            <li>Save your settings.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Add the storefront block</h2>
          <p className="mt-3">
            Open the Shopify theme editor and add the StoreFlow Quick Order app
            block to the desired template.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Available columns</h2>
          <ul className="mt-4 space-y-2">
            <li>Product image</li>
            <li>SKU</li>
            <li>Price</li>
            <li>Quantity</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-semibold text-slate-950">Verify the storefront</h2>
          <p className="mt-3">
            Confirm product loading, pagination, quantity entry, price
            visibility, and add-to-cart behavior with your active theme.
          </p>
        </section>
      </div>
    </article>
  );
}
