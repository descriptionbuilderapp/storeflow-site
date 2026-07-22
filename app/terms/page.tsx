import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "StoreFlow Terms of Service.",
};

const lastUpdated = "July 22, 2026";
const supportEmail = "descriptionbuilderapp@gmail.com";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Legal
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Terms of Service
      </h1>

      <p className="mt-4 text-sm text-slate-500">
        Last updated: {lastUpdated}
      </p>

      <div className="mt-10 space-y-10 leading-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            1. Agreement to these Terms
          </h2>
          <p className="mt-3">
            These Terms of Service (&quot;Terms&quot;) govern access to and use
            of StoreFlow, including the StoreFlow Shopify application, website,
            documentation, and support services.
          </p>
          <p className="mt-3">
            By installing, accessing, or using StoreFlow, you agree to these
            Terms. If you do not agree, do not install or use StoreFlow.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            2. StoreFlow service
          </h2>
          <p className="mt-3">
            StoreFlow provides tools for configuring wholesale purchasing
            rules, customer access restrictions, price visibility, Quick Order,
            storefront behavior, and checkout validation within Shopify.
          </p>
          <p className="mt-3">
            StoreFlow provides software configuration and enforcement tools. It
            does not act as a merchant of record, payment processor,
            marketplace, shipping provider, tax adviser, legal adviser, or
            accounting service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            3. Eligibility and authority
          </h2>
          <p className="mt-3">
            You may use StoreFlow only if you are legally able to enter into
            these Terms and are authorized to install and manage applications
            for the relevant Shopify store.
          </p>
          <p className="mt-3">
            You are responsible for activity performed through your Shopify
            account, staff accounts, and StoreFlow configuration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            4. Merchant responsibilities
          </h2>
          <p className="mt-3">You are responsible for:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Providing accurate store and configuration information.</li>
            <li>Protecting Shopify credentials and limiting staff access.</li>
            <li>
              Reviewing StoreFlow settings before relying on purchasing
              restrictions or customer-access rules.
            </li>
            <li>
              Testing storefront, cart, theme, Quick Order, and checkout
              behavior before launch and after relevant Shopify or theme changes.
            </li>
            <li>
              Confirming that rules, messages, prices, tags, product selections,
              and customer applicability match your business requirements.
            </li>
            <li>
              Complying with applicable laws, Shopify policies, customer
              disclosures, privacy obligations, taxes, pricing rules, and your
              own customer contracts.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            5. Shopify, themes, and third-party dependencies
          </h2>
          <p className="mt-3">
            StoreFlow depends on Shopify APIs, Shopify Admin, Shopify Functions,
            theme app extensions, merchant-selected themes, checkout
            capabilities, browsers, networks, and other systems not controlled
            by StoreFlow.
          </p>
          <p className="mt-3">
            StoreFlow is not responsible for failures, delays,
            incompatibilities, data issues, or losses caused by Shopify,
            merchant-selected themes, third-party applications, payment
            providers, internet services, or other systems outside
            StoreFlow&apos;s reasonable control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            6. Configuration and enforcement limitations
          </h2>
          <p className="mt-3">
            StoreFlow results may vary based on product data, customer tags,
            cart contents, discounts, theme behavior, checkout configuration,
            app-embed status, Shopify availability, and merchant settings.
          </p>
          <p className="mt-3">
            You must independently verify that StoreFlow behaves as expected
            for your store. StoreFlow does not guarantee that every invalid
            order, incorrect price display, customer-access issue, or checkout
            attempt will be detected or prevented in every environment or
            circumstance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            7. Acceptable use
          </h2>
          <p className="mt-3">
            You may not use StoreFlow to violate law, Shopify policies, the
            rights of others, or the security or integrity of any system.
          </p>
          <p className="mt-3">
            You may not attempt to bypass access controls, interfere with the
            service, introduce malicious code, or use StoreFlow to process
            information you are not authorized to use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            8. Pricing, trials, billing, and refunds
          </h2>
          <p className="mt-3">
            If StoreFlow offers paid plans, applicable prices, billing
            intervals, trial terms, and material plan limitations will be
            presented before you approve a paid subscription through Shopify.
          </p>
          <p className="mt-3">
            Shopify may process charges, taxes, refunds, credits, and billing
            adjustments under Shopify&apos;s own terms and billing systems.
          </p>
          <p className="mt-3">
            Unless otherwise required by law or expressly stated in a published
            refund policy, fees already charged are generally non-refundable.
            StoreFlow may review refund requests individually in cases involving
            a verified duplicate charge, billing error, or material service
            issue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            9. Updates and service changes
          </h2>
          <p className="mt-3">
            StoreFlow may update, modify, add, remove, suspend, or discontinue
            features to improve security, reliability, compatibility, or the
            product experience.
          </p>
          <p className="mt-3">
            When reasonably practical, material changes affecting paid service
            or core functionality will be communicated through the application,
            website, release notes, email, or Shopify listing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            10. Availability and support
          </h2>
          <p className="mt-3">
            StoreFlow may be temporarily unavailable because of maintenance,
            security events, Shopify outages, network failures, third-party
            changes, or circumstances outside reasonable control.
          </p>
          <p className="mt-3">
            StoreFlow does not guarantee uninterrupted or error-free operation,
            a specific response time, or resolution of every issue. Support is
            provided through the channels and policies published by StoreFlow.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            11. Disclaimer of warranties
          </h2>
          <p className="mt-3">
            To the maximum extent permitted by law, StoreFlow is provided
            &quot;as is&quot; and &quot;as available.&quot; StoreFlow disclaims
            implied warranties of merchantability, fitness for a particular
            purpose, title, non-infringement, and warranties arising from
            course of dealing or usage of trade.
          </p>
          <p className="mt-3">
            StoreFlow does not warrant that the service will meet every business
            requirement, prevent every invalid order, remain compatible with
            every theme or third-party application, or operate without delay,
            interruption, security incident, or error.
          </p>
          <p className="mt-3">
            Nothing in these Terms excludes warranties or rights that cannot
            lawfully be excluded.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            12. Limitation of liability
          </h2>
          <p className="mt-3">
            To the maximum extent permitted by law, StoreFlow will not be liable
            for indirect, incidental, special, consequential, exemplary, or
            punitive damages, or for lost profits, lost revenue, lost sales,
            lost business opportunities, loss of goodwill, loss of data, order
            errors, pricing errors, customer claims, or costs of substitute
            services arising from or related to StoreFlow.
          </p>
          <p className="mt-3">
            To the maximum extent permitted by law, StoreFlow&apos;s total
            aggregate liability arising from or relating to the service will
            not exceed the greater of: (a) the fees paid for StoreFlow during
            the six months immediately preceding the event giving rise to the
            claim; or (b) USD $100.
          </p>
          <p className="mt-3">
            These limitations apply regardless of the legal theory and even if
            StoreFlow was advised that damages were possible. They do not apply
            where liability cannot lawfully be limited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            13. Indemnification
          </h2>
          <p className="mt-3">
            To the extent permitted by law, you agree to defend, indemnify, and
            hold StoreFlow harmless from third-party claims, losses,
            liabilities, damages, and reasonable costs arising from your store,
            products, pricing, customer communications, unlawful use of
            StoreFlow, violation of these Terms, violation of Shopify policies,
            or infringement of another person&apos;s rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            14. Intellectual property
          </h2>
          <p className="mt-3">
            StoreFlow and its software, branding, website, documentation, and
            related materials are protected by applicable
            intellectual-property laws.
          </p>
          <p className="mt-3">
            Subject to these Terms, StoreFlow grants you a limited,
            non-exclusive, non-transferable, revocable right to use StoreFlow
            for your Shopify store during the applicable service period.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            15. Suspension and termination
          </h2>
          <p className="mt-3">
            You may stop using StoreFlow and uninstall the application at any
            time, subject to applicable Shopify billing terms.
          </p>
          <p className="mt-3">
            StoreFlow may suspend or terminate access when reasonably necessary
            to address security risks, nonpayment, unlawful activity, abuse,
            material violation of these Terms, Shopify requirements, or threats
            to StoreFlow or other users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            16. Privacy
          </h2>
          <p className="mt-3">
            StoreFlow&apos;s processing of information is described in the
            StoreFlow Privacy Policy. By using StoreFlow, you acknowledge that
            information may be processed as described in that policy and as
            required to provide the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            17. Governing law
          </h2>
          <p className="mt-3">
            These Terms are governed by the laws of the State of New York,
            without regard to conflict-of-law principles, except where
            applicable law requires otherwise.
          </p>
          <p className="mt-3">
            Any dispute that is not subject to a legally required alternative
            forum will be brought in a state or federal court located in New
            York, and each party consents to that court&apos;s jurisdiction,
            except where applicable law requires otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            18. Changes to these Terms
          </h2>
          <p className="mt-3">
            StoreFlow may update these Terms to reflect product, legal, billing,
            security, or Shopify platform changes. The revised Terms will be
            posted on this page with an updated date.
          </p>
          <p className="mt-3">
            Continued use of StoreFlow after revised Terms become effective
            constitutes acceptance to the extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            19. General provisions
          </h2>
          <p className="mt-3">
            If any provision of these Terms is found unenforceable, the
            remaining provisions will remain in effect. Failure to enforce a
            provision is not a waiver.
          </p>
          <p className="mt-3">
            These Terms, together with the Privacy Policy and any published
            plan or support terms, form the agreement governing use of
            StoreFlow.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-950">
            20. Contact
          </h2>
          <p className="mt-3">Questions about these Terms may be sent to:</p>
          <a
            href={`mailto:${supportEmail}?subject=StoreFlow%20Terms%20Question`}
            className="mt-3 inline-flex break-all font-semibold text-emerald-700 hover:text-emerald-800"
          >
            {supportEmail}
          </a>
        </section>
      </div>
    </article>
  );
}
