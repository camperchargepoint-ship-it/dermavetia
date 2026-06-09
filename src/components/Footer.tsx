import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-dermavetia-mist bg-dermavetia-white">
      <div className="mx-auto flex w-full max-w-6xl px-5 py-8 text-sm text-dermavetia-teal sm:px-6 lg:px-8">
        <p>{siteConfig.name}</p>
      </div>
    </footer>
  );
}
