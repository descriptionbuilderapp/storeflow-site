import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with StoreFlow.",
};

const supportEmail = "descriptionbuilderapp@gmail.com";

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
          Review the documentation or contact StoreFlow Support for assistance.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Documentation</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Review setup instructions, feature guides, and release notes.
          </p>
          <Link
            href="/docs"
            className="mt-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View documentation →
          </Link>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Contact support</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Email us with your store URL, the affected StoreFlow feature, and a
            clear description of the issue.
          </p>
          <a
            href={`mailto:${supportEmail}?subject=StoreFlow%20Support%20Request`}
            className="mt-6 inline-flex break-all font-semibold text-emerald-700 hover:text-emerald-800"
          >
            {supportEmail} →
          </a>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-950">
          Include this information
        </h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>• Your Shopify store URL</li>
          <li>• The StoreFlow page or storefront feature involved</li>
          <li>• Steps to reproduce the issue</li>
          <li>• Screenshots or error messages, when available</li>
        </ul>
      </section>
    </div>
  );
}
