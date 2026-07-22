import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Release Notes",
  description: "StoreFlow release notes.",
};

export default function ReleaseNotesPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
      <Link href="/docs" className="text-sm font-semibold text-emerald-700">
        ← Back to documentation
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Release notes
      </h1>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-950">
            Internal Beta
          </h2>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
            Current
          </span>
        </div>

        <p className="mt-5 leading-8 text-slate-600">
          StoreFlow has completed its core feature development and entered the
          productization and release-preparation stage.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-950">Included</h3>
        <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">
          <li>Dashboard</li>
          <li>Minimum Order</li>
          <li>Product, Variant, and Collection MOQ</li>
          <li>Saved Rule Sets</li>
          <li>Hide Prices and purchasing controls</li>
          <li>Quick Order</li>
          <li>Theme App Extension</li>
          <li>Checkout Validation Function</li>
        </ul>

        <h3 className="mt-8 text-xl font-semibold text-slate-950">
          Stability improvements
        </h3>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Discounted minimum-order calculation</li>
          <li>Cart Guard refresh and lifecycle handling</li>
          <li>Checkout protection</li>
          <li>Quick Order cursor pagination</li>
          <li>Large-cart collection membership loading</li>
        </ul>

        <p className="mt-8 text-sm text-slate-500">
          Public version numbering will be finalized before Shopify App Store release.
        </p>
      </section>
    </article>
  );
}
