import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "StoreFlow Privacy Policy explaining how information is processed and protected.",
};

const lastUpdated = "July 22, 2026";
const supportEmail = "descriptionbuilderapp@gmail.com";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Legal
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-slate-500">
        Last updated: {lastUpdated}
      </p>

      <div className="mt-10 space-y-10 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            1. Overview
          </h2>
          <p className="mt-3">
            This Privacy Policy explains how StoreFlow (&quot;StoreFlow,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) processes
            information when a Shopify merchant installs or uses the StoreFlow
            application, website, documentation, or support services.
          </p>
          <p className="mt-3">
            StoreFlow is designed to process only the information reasonably
            necessary to provide merchant-configured wholesale purchasing
            rules, customer access controls, Quick Order, checkout validation,
            support, security, and service maintenance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            2. Information StoreFlow may process
          </h2>
          <p className="mt-3">
            Depending on the features configured by a merchant, StoreFlow may
            process:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Shopify shop name, shop domain, and app installation details.</li>
            <li>StoreFlow settings, preferences, purchasing rules, and rule sets.</li>
            <li>
              Product, variant, and collection identifiers and related catalog
              information needed to apply configured rules.
            </li>
            <li>
              Customer identifiers or customer tags when needed to determine
              whether a merchant-configured rule applies.
            </li>
            <li>
              Technical information reasonably needed for authentication,
              security, troubleshooting, and service reliability.
            </li>
            <li>
              Information voluntarily provided in support requests, such as a
              store URL, screenshots, error messages, and issue descriptions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            3. Information StoreFlow does not intentionally collect
          </h2>
          <p className="mt-3">
            StoreFlow does not intentionally collect customer payment-card
            numbers, banking credentials, Shopify passwords, or customer
            account passwords. Payment processing and Shopify authentication
            are handled by Shopify or the merchant&apos;s selected providers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            4. How information is used
          </h2>
          <p className="mt-3">
            StoreFlow uses information only as reasonably necessary to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Provide the StoreFlow features selected by the merchant.</li>
            <li>Save and apply merchant-configured settings and rules.</li>
            <li>Authenticate requests and help protect the service from misuse.</li>
            <li>Diagnose errors and maintain service reliability.</li>
            <li>Respond to merchant support requests.</li>
            <li>Comply with applicable law and Shopify platform requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            5. Sale and disclosure of information
          </h2>
          <p className="mt-3">
            StoreFlow does not sell merchant or customer personal information.
            Information may be disclosed when reasonably necessary to operate
            StoreFlow, protect StoreFlow or its users, respond to lawful
            requests, or comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            6. Data retention
          </h2>
          <p className="mt-3">
            StoreFlow retains information only for as long as reasonably
            necessary to provide the service, maintain required security or
            business records, resolve disputes, or comply with legal and
            Shopify requirements. Retention periods may vary depending on the
            type of information and the reason it is processed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            7. Security and service limitations
          </h2>
          <p className="mt-3">
            StoreFlow uses reasonable administrative and technical safeguards
            appropriate to the information processed.
          </p>
          <p className="mt-3">
            No internet transmission, software platform, hosting environment,
            or electronic storage system can be guaranteed to be completely
            secure, uninterrupted, or error-free. To the maximum extent
            permitted by law, StoreFlow is not responsible for incidents caused
            by factors outside its reasonable control, including compromised
            merchant credentials, merchant configuration, Shopify platform
            failures, third-party services selected by a merchant, internet
            disruptions, or unlawful acts by others.
          </p>
          <p className="mt-3">
            Nothing in this policy excludes or limits responsibility that
            cannot lawfully be excluded or limited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            8. Merchant responsibilities
          </h2>
          <p className="mt-3">
            Merchants are responsible for protecting their Shopify credentials,
            limiting staff access, configuring StoreFlow correctly, testing
            storefront and checkout behavior, and providing any privacy notices
            or consents required for their own customers and business.
          </p>
          <p className="mt-3">
            StoreFlow does not determine a merchant&apos;s independent legal
            obligations and does not provide legal, tax, accounting, or
            regulatory advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            9. Shopify platform
          </h2>
          <p className="mt-3">
            StoreFlow operates through Shopify APIs, Shopify Admin, theme app
            extensions, and Shopify checkout-related capabilities. Shopify
            processes information under its own terms and privacy policies.
            StoreFlow is not responsible for Shopify&apos;s independent
            services, security, availability, or data practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            10. Privacy requests
          </h2>
          <p className="mt-3">
            Merchants and authorized individuals may contact StoreFlow to
            request access, correction, deletion, or other action regarding
            information processed by StoreFlow. Requests may be subject to
            identity verification, applicable law, Shopify requirements, and
            lawful retention obligations.
          </p>
          <p className="mt-3">
            Customer requests relating to a Shopify store should generally be
            directed first to the merchant that controls that store.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            11. Changes to this policy
          </h2>
          <p className="mt-3">
            StoreFlow may update this Privacy Policy to reflect changes to the
            application, Shopify requirements, or applicable law. The revised
            version will be posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            12. Contact
          </h2>
          <p className="mt-3">
            Questions or privacy requests may be sent to:
          </p>
          <a
            href={`mailto:${supportEmail}?subject=StoreFlow%20Privacy%20Request`}
            className="mt-3 inline-flex break-all font-semibold text-emerald-700 hover:text-emerald-800"
          >
            {supportEmail}
          </a>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-xl font-semibold text-slate-950">
            Legal notice
          </h2>
          <p className="mt-3">
            This Privacy Policy describes StoreFlow&apos;s intended data
            practices. It is not legal advice to merchants. Each merchant is
            responsible for obtaining advice about the privacy laws, notices,
            and customer obligations applicable to its own business.
          </p>
        </section>
      </div>
    </article>
  );
}
