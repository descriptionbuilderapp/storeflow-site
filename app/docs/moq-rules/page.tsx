import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MOQ Rules Guide",
  description: "Configure StoreFlow MOQ rules and saved rule sets.",
};

export default function MoqRulesGuide() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
      <Link href="/docs" className="text-sm font-semibold text-emerald-700">
        ← Back to documentation
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        MOQ Rules
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        Build reusable product, variant, and collection minimum-quantity rules,
        then activate them through saved rule sets.
      </p>

      <div className="mt-12 space-y-9 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">1. Add rules to the library</h2>
          <p className="mt-3">
            Add a product or collection, select the relevant resource, enter the
            minimum quantity, and save the rule.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">2. Create a saved rule set</h2>
          <p className="mt-3">
            A library rule does not affect checkout until it is included in an
            enabled saved rule set.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Rule-set modes</h2>
          <ul className="mt-4 space-y-3">
            <li><strong>Single:</strong> One selected rule is checked.</li>
            <li><strong>Any:</strong> The customer can satisfy any one selected rule.</li>
            <li><strong>All:</strong> The customer must satisfy every selected rule.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">Multiple enabled sets</h2>
          <p className="mt-3">
            Enabled rule sets apply together. Customers must satisfy every
            enabled rule set that applies to the cart. Unrelated rule sets are ignored.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-semibold text-slate-950">Test rule combinations</h2>
          <p className="mt-3">
            Test each saved rule set separately, then test combinations of
            enabled sets with related and unrelated products.
          </p>
        </section>
      </div>
    </article>
  );
}
