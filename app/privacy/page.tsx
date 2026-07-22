import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StoreFlow Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: July 2026</p>

      <div className="mt-10 space-y-9 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
          <p className="mt-3">
            StoreFlow respects merchant and customer privacy. This page will
            describe what information StoreFlow processes, why it is needed,
            how it is protected, and how data requests are handled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            Information processed
          </h2>
          <p className="mt-3">
            StoreFlow may process Shopify store information, application
            settings, product and collection identifiers, and customer tags
            required to evaluate configured wholesale rules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Payments</h2>
          <p className="mt-3">
            StoreFlow does not collect customer payment card details or
            customer passwords.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Final policy</h2>
          <p className="mt-3">
            The complete commercial Privacy Policy will be published before the
            public Shopify App Store release.
          </p>
        </section>
      </div>
    </article>
  );
}
