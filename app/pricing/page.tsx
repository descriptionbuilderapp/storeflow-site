import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pricing", description: "StoreFlow Internal Beta pricing and feature availability." };

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Pricing</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Simple Internal Beta pricing structure</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">StoreFlow pricing is primarily based on Hide Prices and Quick Order. Final plan details are presented before any paid Shopify subscription is approved.</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800">Paid core features</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Hide Prices and Quick Order</h2>
          <ul className="mt-6 space-y-3 text-slate-700"><li>• Price visibility and purchasing restrictions</li><li>• Faster wholesale product ordering</li><li>• Customer and resource-based configuration</li></ul>
        </section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">Included during Internal Beta</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Minimum Order, MOQ Rules, and checkout protection</h2>
          <p className="mt-5 leading-8 text-slate-700">These features are currently included at no additional charge during Internal Beta. Availability, packaging, and pricing may change as compatibility and capacity validation continues.</p>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-950">Before subscribing</h2>
        <p className="mt-4 leading-8 text-slate-600">Review the current use cases, limitations, support scope, and Terms. A paid subscription does not create an SLA, guaranteed response time, guaranteed capacity, or universal compatibility commitment.</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-emerald-700">
          <Link href="/docs/supported-use">Supported use →</Link>
          <Link href="/docs/known-limitations">Known limitations →</Link>
          <Link href="/support">Support policy →</Link>
          <Link href="/terms">Terms →</Link>
        </div>
      </section>
    </div>
  );
}
