import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { title: "Order rules", description: "Configure minimum orders and product, variant, or collection MOQ requirements." },
  { title: "Customer restrictions", description: "Apply purchasing rules and price visibility by customer status or tags." },
  { title: "Quick ordering", description: "Give wholesale buyers a faster way to find products and build orders." },
  { title: "Checkout validation", description: "Add a server-side validation layer for documented order rules." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Wholesale operations platform for Shopify</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">Wholesale operations, simplified.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Manage order rules, customer restrictions, price visibility, quick ordering, and checkout validation from one Shopify app.</p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">Built for small and growing Shopify wholesale businesses using Online Store 2.0 themes, small-to-medium catalogs, and low-to-moderate storefront traffic.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/features" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700">View features</Link>
              <Link href="/docs/supported-use" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50">Review supported use</Link>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/50">
            <Image src="/storeflow-dashboard.png" alt="StoreFlow dashboard showing wholesale order policies, customer access settings, quick order, and checkout protection." width={1600} height={900} className="h-auto w-full rounded-2xl" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">One platform</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Essential wholesale controls in one place</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Replace overlapping single-purpose tools with a clearer workflow for managing wholesale purchasing.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 h-10 w-10 rounded-xl bg-emerald-100 ring-1 ring-emerald-200" />
              <h3 className="text-xl font-semibold text-slate-950">{capability.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 px-7 py-9 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">Controlled Internal Beta</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Designed for documented and recommended Shopify environments</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-700">Large catalogs, headless storefronts, highly customized carts, high concurrency, and enterprise capacity requirements may require additional validation.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/docs/supported-use" className="text-emerald-700 hover:text-emerald-800">Supported use cases →</Link>
              <Link href="/docs/known-limitations" className="text-emerald-700 hover:text-emerald-800">Known limitations →</Link>
              <Link href="/docs/compatibility" className="text-emerald-700 hover:text-emerald-800">Capacity & compatibility →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="rounded-3xl bg-slate-950 px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Available through controlled Internal Beta onboarding</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">Review the current operating guidance, verify your storefront, and contact support before relying on StoreFlow for production orders.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <Link href="/docs/getting-started" className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">Get started</Link>
            <Link href="/support" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold transition hover:bg-slate-900">Contact support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
