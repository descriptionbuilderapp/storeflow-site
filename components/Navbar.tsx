import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="StoreFlow home">
          <Image src="/storeflow-logo.png" alt="" width={40} height={40} className="rounded-xl" priority />
          <span className="text-xl font-bold tracking-tight">StoreFlow</span>
        </Link>
        <nav className="order-3 flex w-full items-center justify-center gap-5 text-sm font-medium text-slate-600 sm:order-2 sm:w-auto">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">{link.label}</Link>
          ))}
        </nav>
        <Link href="/docs/getting-started" className="order-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:order-3">
          Get started
        </Link>
      </div>
    </header>
  );
}
