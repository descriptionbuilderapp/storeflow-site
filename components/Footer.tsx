import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-lg font-semibold text-slate-950">StoreFlow</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            A wholesale operations platform for Shopify.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          <Link href="/features" className="hover:text-slate-950">Features</Link>
          <Link href="/docs" className="hover:text-slate-950">Documentation</Link>
          <Link href="/support" className="hover:text-slate-950">Support</Link>
          <Link href="/privacy" className="hover:text-slate-950">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-950">Terms</Link>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-slate-500">
          © {new Date().getFullYear()} StoreFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
