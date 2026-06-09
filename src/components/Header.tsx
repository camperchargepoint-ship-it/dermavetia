import Link from "next/link";

import { siteConfig } from "@/data/site";

export default function Header() {
  return (
    <header className="border-b border-dermavetia-mist bg-dermavetia-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-normal text-dermavetia-forest">
          {siteConfig.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dermavetia-ink transition-colors hover:text-dermavetia-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
