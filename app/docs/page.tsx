import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description: "StoreFlow setup and feature documentation.",
};

const docs = [
  {
    title: "Getting started",
    description: "Install, configure, and verify StoreFlow.",
    href: "/docs/getting-started",
  },
  {
    title: "Minimum Order",
    description: "Set cart-value requirements for wholesale orders.",
    href: "/docs/minimum-order",
  },
  {
    title: "MOQ Rules",
    description: "Configure product, variant, and collection minimum quantities.",
    href: "/docs/moq-rules",
  },
  {
    title: "Hide Prices",
    description: "Control storefront pricing and purchasing access.",
    href: "/docs/hide-prices",
  },
  {
    title: "Quick Order",
    description: "Configure the streamlined wholesale ordering experience.",
    href: "/docs/quick-order",
  },
  {
    title: "Release notes",
    description: "Review current features, improvements, and fixes.",
    href: "/docs/release-notes",
  },
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
          Follow the setup guide, review feature instructions, and check the
          latest release notes.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.title}
            href={doc.href}
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-950">{doc.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{doc.description}</p>
            <p className="mt-5 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
