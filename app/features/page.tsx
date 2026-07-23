import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Features", description: "Explore StoreFlow order rules, customer restrictions, price visibility, quick ordering, and checkout validation." };

const groups = [
  { title: "Order Rules", description: "Create purchasing requirements that reflect documented wholesale policies.", items: ["Minimum Order — Internal Beta", "Product, Variant, and Collection MOQ — Internal Beta", "Saved Rule Sets — Internal Beta"] },
  { title: "Customer Restrictions", description: "Apply documented purchasing rules based on customer status and tags.", items: ["Customer Applicability", "Customer Tag Rules", "Optional Checkout Block — Internal Beta"] },
  { title: "Price Visibility", description: "Control storefront pricing and purchasing controls for documented customer groups.", items: ["Hide Prices", "Hide Add to Cart", "Hide Buy It Now"] },
  { title: "Quick Ordering", description: "Help wholesale buyers browse products and build larger orders more efficiently.", items: ["Quick Order", "Product and collection sources", "Configurable columns and pagination"] },
  { title: "Checkout Validation", description: "Add server-side validation for documented order rules in supported checkout environments.", items: ["Checkout Validation Function — Internal Beta", "Minimum Order validation", "MOQ validation"] },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Features</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Wholesale controls that work together</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">StoreFlow brings order rules, customer restrictions, price visibility, quick ordering, and checkout validation into one platform.</p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">{group.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{group.description}</p>
            <ul className="mt-6 space-y-3">{group.items.map((item) => <li key={item} className="flex items-start gap-3 text-slate-700"><span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />{item}</li>)}</ul>
          </section>
        ))}
      </div>
      <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-950">Merchant verification is required</h2>
        <p className="mt-4 leading-8 text-slate-700">Minimum Order and MOQ tools are intended to assist with storefront order enforcement. Merchants should test rule behavior with their own theme, cart, checkout, customer tags, catalog, and installed apps before relying on it for live orders.</p>
        <p className="mt-3 leading-8 text-slate-700">StoreFlow does not guarantee that every non-compliant order will be prevented in every customized storefront environment.</p>
        <Link href="/docs/supported-use" className="mt-5 inline-flex font-semibold text-emerald-700">Review current guidance →</Link>
      </section>
    </div>
  );
}
