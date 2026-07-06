import Image from "next/image";
import type { CSSProperties } from "react";

import Button from "@/components/design-system/Button";
import Card from "@/components/design-system/Card";
import ImageCard from "@/components/design-system/ImageCard";
import PageShell from "@/components/design-system/PageShell";
import SectionHeader from "@/components/design-system/SectionHeader";

const navItems = [
  { label: "Inicio", href: "/preview" },
  { label: "Sobre mí", href: "/sobre-laia" },
  { label: "Área Tutor", href: "/area-tutor" },
  { label: "Área Profesional", href: "/area-profesional" },
  { label: "Últimos recursos", href: "/recursos#casos-clinicos" },
  { label: "Contacto", href: "/contacto" },
];

const authorityItems = [
  {
    label: "Acreditada AVEPA en Dermatología",
    icon: "/images/iconos/formacion.svg",
  },
  {
    label: "GPCert Dermatology",
    icon: "/images/iconos/formacion.svg",
  },
  {
    label: "Más de 20 años de experiencia",
    icon: "/images/iconos/seguimiento.svg",
  },
  {
    label: "Dermatología veterinaria especializada",
    icon: "/images/iconos/consulta dermatologica.svg",
  },
];

const tutorResources = [
  {
    title: "Picor persistente en perros y gatos",
    image: "/images/laia/laia-lola.png",
  },
  {
    title: "Otitis recurrentes: cuándo consultar",
    image: "/images/laia/laia-paciente.png",
  },
  {
    title: "Alergias cutáneas y seguimiento",
    image: "/images/laia/laia-practica.png",
  },
  {
    title: "Cuidado diario de la piel sensible",
    image: "/images/laia/laia2.png",
  },
];

const professionalResources = [
  {
    title: "Derivación dermatológica estructurada",
    image: "/images/laia/laia-microscopio.png",
  },
  {
    title: "Citología cutánea en consulta",
    image: "/images/laia/laia-practica.png",
  },
  {
    title: "Abordaje de otitis complejas",
    image: "/images/laia/laia1.png",
  },
  {
    title: "Seguimiento de pacientes crónicos",
    image: "/images/laia/laia-paciente.png",
  },
];

const footerColumns = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/preview" },
      { label: "Sobre Laia", href: "/sobre-laia" },
      { label: "Área Tutor", href: "/area-tutor" },
      { label: "Área Profesional", href: "/area-profesional" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Para tutores", href: "/recursos#tutores" },
      { label: "Para profesionales", href: "/recursos#profesionales" },
      { label: "Casos clínicos", href: "/recursos#casos-clinicos" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "/preview#legal" },
      { label: "Privacidad", href: "/preview#privacidad" },
      { label: "Cookies", href: "/preview#cookies" },
    ],
  },
  {
    title: "Redes sociales",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/dermavetia" },
      { label: "WhatsApp", href: "https://wa.me/34655286207" },
      { label: "Email", href: "mailto:laiaborque@dermavetia.com" },
    ],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D7E2E6] bg-[#FBFBFB]/90 backdrop-blur-md">
      <div className="container-page flex min-h-16 items-center justify-between gap-4 lg:min-h-20 lg:gap-6">
        <a href="/preview" className="flex h-16 w-[176px] shrink-0 items-center gap-3 sm:w-[210px] lg:h-20 lg:w-[260px]">
          <Image
            src="/images/logos/logo apaisado.png"
            alt="Dermavetia"
            width={260}
            height={92}
            priority
            className="h-11 w-auto origin-left scale-[1.52] object-contain sm:h-12 sm:scale-[1.52] lg:h-16 lg:scale-[1.66]"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="/contacto" className="hidden lg:inline-flex">
          Solicitar colaboración
        </Button>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#D7E2E6] bg-white/80 text-[#1F3B41] shadow-[0_12px_28px_rgba(31,59,65,0.08)] transition hover:bg-[#F7F8FA] [&::-webkit-details-marker]:hidden">
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </summary>

          <div className="absolute right-0 top-14 w-[min(92vw,24rem)] rounded-[1.75rem] border border-[#D7E2E6] bg-[#FBFBFB]/95 p-5 shadow-[0_24px_70px_rgba(31,59,65,0.16)] backdrop-blur-md">
            <a href="/preview" className="mb-5 flex items-center">
              <Image
                src="/images/logos/logo apaisado.png"
                alt="Dermavetia"
                width={220}
                height={78}
                className="h-14 w-auto object-contain"
              />
            </a>

            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-5 py-3 text-sm font-semibold text-[#1F3B41] transition hover:bg-[#D7E2E6]/35"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button href="/contacto" className="mt-5 w-full">
              Solicitar valoración
            </Button>
          </div>
        </details>
      </div>
    </header>
  );
}

function ResourceCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <Card className="p-3">
      <ImageCard
        src={image}
        alt=""
        width={680}
        height={520}
        className="h-44 border-0 p-0 shadow-none"
        imageClassName="rounded-[1.35rem]"
      />
      <div className="p-4">
        <h4 className="min-h-14 text-lg font-semibold leading-7 text-[var(--color-primary)]">
          {title}
        </h4>
        <a
          href="/recursos"
          className="mt-5 inline-flex text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
        >
          Leer más
        </a>
      </div>
    </Card>
  );
}

function PawTrail() {
  const paws = [
    { left: "0rem", top: ".12rem", delay: "0s", rotate: "82deg" },
    { left: "2.45rem", top: "1rem", delay: ".52s", rotate: "98deg" },
    { left: "4.95rem", top: ".9rem", delay: "1.04s", rotate: "84deg" },
    { left: "7.45rem", top: ".02rem", delay: "1.56s", rotate: "100deg" },
  ];

  return (
    <div
      className="pointer-events-none relative h-7 w-36 sm:h-8 sm:w-44"
      aria-hidden="true"
    >
      {paws.map((paw) => (
        <span
          key={`${paw.left}-${paw.delay}`}
          className="paw-trail-item"
          style={
            {
              "--paw-left": paw.left,
              "--paw-top": paw.top,
              "--paw-delay": paw.delay,
              "--paw-rotate": paw.rotate,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 28 28" focusable="false">
            <ellipse cx="14" cy="18" rx="6.4" ry="5.4" />
            <ellipse cx="7.5" cy="10.4" rx="2.7" ry="3.7" />
            <ellipse cx="12.3" cy="7.2" rx="2.6" ry="3.5" />
            <ellipse cx="17.7" cy="7.2" rx="2.6" ry="3.5" />
            <ellipse cx="22.5" cy="10.4" rx="2.7" ry="3.7" />
          </svg>
        </span>
      ))}

      <style>{`
        .paw-trail-item {
          position: absolute;
          left: var(--paw-left);
          top: var(--paw-top);
          width: 1.05rem;
          height: 1.05rem;
          color: #1f3b41;
          opacity: 0;
          transform: translate3d(0, 0, 0) rotate(var(--paw-rotate));
          animation: paw-trail-step 5.2s ease-in-out infinite;
          animation-delay: var(--paw-delay);
        }

        .paw-trail-item svg {
          display: block;
          width: 100%;
          height: 100%;
          fill: currentColor;
        }

        @keyframes paw-trail-step {
          0%,
          100% {
            opacity: 0;
            transform: translate3d(0, 0, 0) rotate(var(--paw-rotate));
          }

          18% {
            opacity: 0.34;
          }

          42% {
            opacity: 0.48;
            transform: translate3d(0.58rem, 0, 0)
              rotate(calc(var(--paw-rotate) - 2deg));
          }

          72% {
            opacity: 0;
            transform: translate3d(1.16rem, 0, 0)
              rotate(calc(var(--paw-rotate) + 2deg));
          }
        }

        @media (min-width: 640px) {
          .paw-trail-item {
            width: 1.46rem;
            height: 1.46rem;
          }
        }
      `}</style>
    </div>
  );
}

function AuthorityPill({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute inset-x-8 -bottom-4 h-16 rounded-full bg-[#1F3B41]/25 blur-2xl -z-10 lg:hidden" />
      <div className="relative z-10 grid grid-cols-2 gap-x-3 gap-y-2 overflow-hidden rounded-[2.5rem] border border-[#D7E2E6]/20 bg-[radial-gradient(circle_at_20%_10%,rgba(215,226,230,0.20),transparent_32%),linear-gradient(135deg,#1F3B41_0%,#254247_55%,#102D32_100%)] p-5 shadow-[0_26px_70px_rgba(31,59,65,0.35)] ring-1 ring-[#D7E2E6]/20 backdrop-blur-xl sm:gap-3 sm:p-5 lg:grid-cols-4 lg:rounded-[999px] lg:border-[#D7E2E6]/25 lg:bg-[var(--color-primary)] lg:bg-none lg:px-6 lg:py-5 lg:shadow-[0_24px_80px_rgba(31,59,65,0.22)] lg:ring-0 lg:backdrop-blur-md">
        {authorityItems.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 lg:justify-center ${
              index < authorityItems.length - 1
                ? "lg:border-r lg:border-[#D7E2E6]/15 lg:pr-5"
                : ""
            }`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D7E2E6]/20 bg-[#D7E2E6]/12 text-[#D7E2E6] sm:h-12 sm:w-12 lg:bg-[#D7E2E6]/15">
              <Image
                src={item.icon}
                alt=""
                width={28}
                height={28}
                className="h-5 w-5 object-contain opacity-95 [filter:brightness(0)_saturate(100%)_invert(91%)_sepia(8%)_saturate(274%)_hue-rotate(160deg)_brightness(96%)_contrast(92%)] sm:h-7 sm:w-7"
              />
            </span>
            <p className="text-[0.72rem] font-semibold leading-4 text-[#F7F8FA] sm:text-sm sm:leading-5">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <PageShell>
      <Header />

      <section
        className="relative min-h-[650px] overflow-visible bg-white sm:min-h-[760px] lg:hidden"
        style={{
          backgroundImage: "url('/images/laia/hero-escritorio.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(251,251,251,.84) 0%, rgba(251,251,251,.52) 26%, rgba(251,251,251,.16) 44%, rgba(251,251,251,0) 58%), linear-gradient(90deg, rgba(251,251,251,.62) 0%, rgba(251,251,251,.28) 38%, rgba(251,251,251,.04) 62%, rgba(251,251,251,0) 80%)",
          }}
        />
        <div className="container-page relative min-h-[650px] pb-24 pt-8 sm:min-h-[760px] sm:pb-28 sm:pt-10">
          <div className="max-w-xl">
            <PawTrail />
            <h1 className="heading-xl mt-5 max-w-4xl">
              Dermatología veterinaria especializada en perros y gatos
            </h1>
            <p className="text-lead mt-6 max-w-2xl">
              Diagnóstico, tratamiento y seguimiento de enfermedades
              dermatológicas y otológicas.
            </p>
          </div>

          <div className="absolute left-1/2 top-[47%] z-10 flex -translate-x-1/2 items-center gap-2 sm:top-[50%]">
            <Button
              href="/contacto"
              className="!min-h-0 !px-4 !py-2 !text-xs shadow-[0_10px_26px_rgba(31,59,65,0.16)]"
            >
              Solicitar valoración
            </Button>
            <Button
              href="/sobre-laia"
              variant="secondary"
              className="!min-h-0 !px-4 !py-2 !text-xs shadow-[0_10px_26px_rgba(31,59,65,0.10)]"
            >
              Conóceme
            </Button>
          </div>

          <AuthorityPill className="absolute bottom-[-42px] left-4 right-4 z-20 sm:bottom-[-48px] sm:left-8 sm:right-8" />
        </div>
      </section>

      <section
        className="relative hidden bg-white lg:block"
        style={{
          backgroundImage: "url('/images/laia/hero-escritorio.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "115% auto",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,248,250,.9) 0%, rgba(247,248,250,.78) 20%, rgba(247,248,250,.44) 40%, rgba(247,248,250,.16) 55%, rgba(247,248,250,0) 70%)",
          }}
        />
        <div className="container-page relative flex min-h-[760px] items-center py-24">
          <div className="w-[42%] max-w-[42%] -translate-y-10">
            <PawTrail />
            <h1 className="heading-xl mt-5 max-w-4xl">
              Dermatología veterinaria especializada en perros y gatos
            </h1>
            <p className="text-lead mt-6 max-w-2xl">
              Diagnóstico, tratamiento y seguimiento de enfermedades
              dermatológicas y otológicas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contacto">Solicitar valoración</Button>
              <Button href="/sobre-laia" variant="secondary">
                Conóceme
              </Button>
            </div>
          </div>
        </div>

        <AuthorityPill className="absolute bottom-[-42px] left-1/2 z-20 w-[82%] -translate-x-1/2" />
      </section>

      <section className="section-padding bg-white pt-48 sm:pt-52 lg:pt-[14.5rem]">
        <div className="container-page">
          <div>
            <SectionHeader
              title="¿Cómo puedo ayudarte?"
            />
            <span className="mt-4 block h-px w-24 rounded-full bg-[#D7E2E6]" />
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <Card className="relative min-h-[46rem] overflow-visible p-9 pb-[29rem] pt-20 sm:min-h-[48rem] sm:p-10 sm:pb-[31rem] sm:pt-20 lg:min-h-[28rem] lg:p-12 lg:pr-[20rem] lg:pb-12 xl:pr-[22rem]">
              <span className="absolute -top-7 left-8 z-20 rounded-full bg-[#D7E2E6] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#1F3B41] shadow-[0_16px_36px_rgba(31,59,65,0.14)] sm:text-base">
                Área Tutor
              </span>
              <div className="relative z-10 max-w-xl lg:max-w-[21rem]">
                <p className="text-lead">
                  Información clara para entender mejor los problemas de piel,
                  picor, otitis o alergias de tu perro o gato.
                </p>
                <Button href="/area-tutor" className="mt-11">
                  Más información
                </Button>
              </div>
              <Image
                src="/images/area-tutor.svg"
                alt=""
                width={700}
                height={700}
                className="pointer-events-none absolute -bottom-16 -right-10 z-0 h-auto w-[35rem] max-w-[136%] object-contain drop-shadow-[0_28px_45px_rgba(31,59,65,0.28)] sm:-bottom-20 sm:-right-8 sm:w-[39rem] lg:-bottom-8 lg:-right-10 lg:w-[31rem] xl:-bottom-8 xl:-right-12 xl:w-[34rem]"
              />
            </Card>

            <Card className="relative min-h-[46rem] overflow-visible p-9 pb-[29rem] pt-20 sm:min-h-[48rem] sm:p-10 sm:pb-[31rem] sm:pt-20 lg:min-h-[28rem] lg:p-12 lg:pr-[20rem] lg:pb-12 xl:pr-[22rem]">
              <span className="absolute -top-7 left-8 z-20 rounded-full bg-[#D7E2E6] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#1F3B41] shadow-[0_16px_36px_rgba(31,59,65,0.14)] sm:text-base">
                Área Profesional
              </span>
              <div className="relative z-10 max-w-xl lg:max-w-[21rem]">
                <p className="text-lead">
                  Derivación de casos, segunda opinión dermatológica y
                  colaboración con clínicas veterinarias.
                </p>
                <Button href="/area-profesional" className="mt-11">
                  Más información
                </Button>
              </div>
              <Image
                src="/images/area-profesional.svg"
                alt=""
                width={700}
                height={700}
                className="pointer-events-none absolute -bottom-16 -right-10 z-0 h-auto w-[35rem] max-w-[136%] object-contain drop-shadow-[0_28px_45px_rgba(31,59,65,0.28)] sm:-bottom-20 sm:-right-8 sm:w-[39rem] lg:-bottom-8 lg:-right-10 lg:w-[31rem] xl:-bottom-8 xl:-right-12 xl:w-[34rem]"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg)]">
        <div className="container-page grid-premium items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow">Sobre Laia</p>
            <h2 className="heading-lg mt-4">
              Comprometida con el bienestar y la calidad de vida de cada paciente.
            </h2>
            <p className="text-lead mt-6">
              Más de dos décadas dedicadas a la medicina veterinaria y
              especializada en dermatología.
            </p>
            <Button href="/sobre-laia" className="mt-8">
              Conocer mi trayectoria
            </Button>
          </div>

          <div className="lg:col-span-5">
            <ImageCard
              src="/images/laia/laia1.png"
              alt=""
              width={1000}
              height={1240}
              className="h-[560px]"
            />
          </div>

          <div className="lg:col-span-3">
            <Card variant="glass">
              <p className="eyebrow">Mi forma de trabajar</p>
              <div className="mt-6 space-y-4 text-xl font-semibold text-[var(--color-primary)]">
                <p>Escuchar</p>
                <div className="h-px bg-[var(--color-soft)]" />
                <p>Diagnosticar</p>
                <div className="h-px bg-[var(--color-soft)]" />
                <p>Tratar</p>
                <div className="h-px bg-[var(--color-soft)]" />
                <p>Acompañar</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeader eyebrow="Recursos" title="Últimos recursos" />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
                Para tutores
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {tutorResources.map((resource) => (
                  <ResourceCard key={resource.title} {...resource} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
                Para profesionales
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {professionalResources.map((resource) => (
                  <ResourceCard key={resource.title} {...resource} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--color-primary)] p-7 shadow-[0_30px_90px_rgba(15,15,15,0.16)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="heading-lg text-white">
                ¿Necesitas una valoración dermatológica?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-soft)] sm:text-lg">
                Puedes contactar para resolver dudas, solicitar una valoración o
                plantear una colaboración profesional.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="https://wa.me/34655286207" variant="secondary">
                WhatsApp
              </Button>
              <Button href="mailto:laiaborque@dermavetia.com" variant="secondary">
                Email
              </Button>
              <Button
                href="/contacto"
                variant="secondary"
                className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-soft)] bg-white">
        <div className="container-page py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
            <div>
              <a href="/preview" className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-soft)] bg-[var(--color-bg)] font-heading text-2xl font-semibold text-[var(--color-primary)]">
                  D
                </span>
                <span className="font-heading text-2xl font-semibold text-[var(--color-primary)]">
                  Dermavetia
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
                Dermatología veterinaria especializada en perros y gatos.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold text-[var(--color-primary)]">
                    {column.title}
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {column.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </PageShell>
  );
}
