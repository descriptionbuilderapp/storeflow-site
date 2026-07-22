import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Order rules",
    description:
      "Configure minimum orders and product, variant, or collection MOQ requirements.",
  },
  {
    title: "Customer access",
    description:
      "Control who can view prices, add products to the cart, and purchase.",
  },
  {
    title: "Quick ordering",
    description:
      "Give wholesale buyers a faster way to find products and build orders.",
  },
  {
    title: "Checkout protection",
    description:
      "Validate purchasing requirements before an order reaches checkout.",
  },
];

const steps = [
  {
    number: "01",
    title: "Install",
    description: "Add StoreFlow to your Shopify store.",
  },
  {
    number: "02",
    title: "Configure",
    description: "Set the purchasing rules and customer restrictions you need.",
  },
  {
    number: "03",
    title: "Verify",
    description: "Test the storefront experience before going live.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_38%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Wholesale operations platform for Shopify
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Wholesale operations, simplified.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Manage purchasing rules, customer access, price visibility, quick
              ordering, and checkout validation from one unified platform.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/features"
                className="rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
              >
                View features
              </Link>

              <Link
                href="/docs"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Read documentation
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/50">
            <Image
              src="/storeflow-dashboard.png"
              alt="StoreFlow dashboard showing wholesale order policies, customer access settings, quick order, and checkout protection."
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            One platform
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Essential wholesale controls in one place
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Replace overlapping single-purpose tools with a clear, consistent
            workflow for managing wholesale purchasing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-10 w-10 rounded-xl bg-emerald-100 ring-1 ring-emerald-200" />
              <h3 className="text-xl font-semibold text-slate-950">
                {capability.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Getting started
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Configure StoreFlow in three steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="rounded-3xl bg-slate-950 px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Built for professional wholesale operations
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Explore StoreFlow features or review the setup documentation.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <Link
              href="/features"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore features
            </Link>
            <Link
              href="/support"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold transition hover:bg-slate-900"
            >
              Get support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
