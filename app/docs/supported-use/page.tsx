import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Supported Use Cases", description: "Recommended StoreFlow Internal Beta use cases and operating guidance." };

const recommended = ["Small and growing Shopify wholesale merchants", "Shopify Online Store 2.0", "Dawn or lightly customized themes", "Up to 1,000 active variants", "Up to 50 distinct products per cart", "MOQ libraries generally around 25 active rules", "Hide Price libraries generally around 25 active rules", "Up to 20 selected collections", "Up to 50 manually selected products", "Low-to-moderate traffic and limited concurrent merchant activity"];
const verified = ["Quick Order displays up to 100 variants per page using Shopify GraphQL cursor pagination", "Collection membership checks process 50 product IDs per request batch", "Automated collection membership coverage includes 101 distinct products", "Product title search reads up to 250 matching parent products", "Availability filtering uses up to 25 GraphQL requests and approximately 2,500 underlying variants"];
const additional = ["Larger catalogs or carts", "Higher rule counts", "High concurrent merchant activity", "Sustained high traffic or flash-sale traffic", "Enterprise workloads or SLA requirements", "Guaranteed capacity or fixed response-time requirements", "Complex custom carts, checkouts, or storefront frameworks"];
const notRecommended = ["Headless storefronts", "Fully custom cart or checkout frameworks", "Enterprise SLA environments", "Mission-critical enforcement without independent merchant testing", "Multiple interacting wholesale enforcement apps", "Custom integration guarantees or continuous operational monitoring"];

function List({ items }: { items: string[] }) { return <ul className="mt-5 space-y-3 text-slate-700">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />{item}</li>)}</ul>; }

export default function SupportedUsePage() { return <article className="mx-auto max-w-5xl px-6 py-20 lg:py-24">
  <Link href="/docs" className="text-sm font-semibold text-emerald-700">← Back to documentation</Link>
  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Internal Beta guidance</p>
  <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Supported use cases</h1>
  <p className="mt-5 text-lg leading-8 text-slate-600">StoreFlow is currently designed for controlled onboarding of small and growing Shopify wholesale businesses.</p>
  <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-7"><p className="font-semibold text-slate-950">These figures are conservative Internal Beta onboarding guidelines, not guaranteed maximum capacity.</p><p className="mt-3 leading-7 text-slate-700">Performance and compatibility may vary based on catalog structure, theme complexity, installed apps, storefront traffic, rule configuration, Shopify platform behavior, network conditions, and concurrent usage.</p></section>
  <div className="mt-10 grid gap-6 lg:grid-cols-2">
    <section className="rounded-2xl border border-slate-200 p-7"><h2 className="text-2xl font-semibold text-slate-950">Recommended Internal Beta use</h2><List items={recommended} /></section>
    <section className="rounded-2xl border border-slate-200 p-7"><h2 className="text-2xl font-semibold text-slate-950">Verified implementation behavior</h2><p className="mt-3 text-sm leading-6 text-slate-500">Implementation behavior is not the same as guaranteed commercial capacity.</p><List items={verified} /></section>
    <section className="rounded-2xl border border-slate-200 p-7"><h2 className="text-2xl font-semibold text-slate-950">Requires additional validation</h2><List items={additional} /></section>
    <section className="rounded-2xl border border-slate-200 p-7"><h2 className="text-2xl font-semibold text-slate-950">Not currently recommended</h2><List items={notRecommended} /></section>
  </div>
</article>; }
