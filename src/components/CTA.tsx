import Link from "next/link";

type CTAProps = {
  href: string;
  label: string;
};

export default function CTA({ href, label }: CTAProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-dermavetia-forest px-5 py-3 text-sm font-semibold text-dermavetia-white transition-colors hover:bg-dermavetia-teal"
    >
      {label}
    </Link>
  );
}
