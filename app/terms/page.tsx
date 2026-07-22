import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "StoreFlow Terms of Service.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: July 2026</p>

      <div className="mt-10 space-y-9 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
          <p className="mt-3">
            These Terms of Service will govern access to and use of StoreFlow.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            Merchant responsibility
          </h2>
          <p className="mt-3">
            Merchants are responsible for reviewing their StoreFlow settings
            and testing storefront behavior before relying on configured
            purchasing restrictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            Service availability
          </h2>
          <p className="mt-3">
            StoreFlow may be updated to improve reliability, security, or
            compatibility with Shopify.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Final terms</h2>
          <p className="mt-3">
            The complete commercial Terms of Service will be published before
            the public Shopify App Store release.
          </p>
        </section>
      </div>
    </article>
  );
}
