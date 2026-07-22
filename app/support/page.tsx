import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with StoreFlow.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Support
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Help when you need it
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          StoreFlow is currently in Internal Beta. Public support contact
          information will be published before the Shopify App Store launch.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Documentation</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Review setup instructions and feature guides.
          </p>
          <Link
            href="/docs"
            className="mt-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View documentation →
          </Link>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
          <p className="mt-3 leading-7 text-slate-600">
            A dedicated support email and response-time policy will be added
            before public release.
          </p>
        </section>
      </div>
    </div>
  );
}
