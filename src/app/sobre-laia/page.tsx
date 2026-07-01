import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const heroCapsules = [
  "+20 años de experiencia clínica",
  "Dermatología desde 2011",
  "Acreditación AVEPA 2026",
];

const workCapsules = ["Escucha", "Individualización", "Prevención"];

const timelineItems = [
  "2004 · Licenciada en Veterinaria por la Universitat Autònoma de Barcelona",
  "2011 · Responsable del Servicio de Dermatología",
  "2022 · GPCert Dermatology por ISVPS",
  "2026 · Acreditada en Dermatología por AVEPA",
];

const formacion = [
  "Licenciada en Veterinaria por la Universitat Autònoma de Barcelona (2004).",
  "GPCert Dermatology por ISVPS (2022).",
  "Acreditada en Dermatología por AVEPA (2026).",
  "Miembro de AVEPA desde 2005.",
  "Miembro del Grupo de Especialidad en Dermatología de AVEPA (GEDA) desde 2015.",
  "Miembro de la European Society of Veterinary Dermatology (ESVD).",
];

const santaSusanna = [
  "Responsable del Servicio de Dermatología (2011 – actualidad).",
  "Veterinaria generalista.",
  "Co-responsable del Servicio de Hospitalización (2018 – 2024).",
  "Responsable de los centros satélite Centre Veterinari Poble Nou y Centre Veterinari Pineda (2006 – 2018).",
  "Veterinaria de urgencias (2004 – 2007).",
];

const costaBrava = ["Servicio de Dermatología."];

const estancias = [
  {
    title: "Gustavo Machicote",
    text: "Estancia en Dermatología junto al Dr. Gustavo Machicote (Clínica Veterinaria Vilanova, 2009).",
  },
  {
    title: "Laura Ordeix",
    text: "Estancia en Dermatología junto a la Dra. Laura Ordeix (Hospital Clínic Veterinari de Bellaterra, 2019).",
  },
];

const congresosCasos = [
  "Participación con casos clínicos en los congresos del Grupo de Trabajo de Dermatología y Alergología (GTA) en 2018, 2019 y 2021.",
  "Participación con casos clínicos en SEVC 2020.",
];

const formacionDivulgacion = [
  "Asistencia a congresos nacionales e internacionales de dermatología veterinaria.",
  "Formación interna para equipos veterinarios.",
  "Colaboraciones formativas con laboratorios y empresas del sector.",
  "Participación en actividades de divulgación y actualización clínica para profesionales veterinarios.",
];

function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 py-16 sm:py-24 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#D7E2E6] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#486D75] shadow-[0_12px_35px_rgba(15,15,15,0.04)]">
      {children}
    </span>
  );
}

function TextStack({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-base leading-8 text-[#486D75] sm:text-lg sm:leading-9">
      {children}
    </div>
  );
}

function SmallCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.75rem] border border-[#D7E2E6] bg-white shadow-[0_20px_60px_rgba(15,15,15,0.055)] ${className}`}
    >
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-6 text-[#486D75] sm:text-base sm:leading-7"
        >
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F3B41]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SobreLaiaPage() {
  return (
    <main className="bg-[#F7F8FA] text-[#0F0F0F]">
      <section className="relative isolate overflow-hidden bg-[#F7F8FA] px-6 py-16 sm:py-20 lg:min-h-screen lg:px-8">
        <div className="absolute left-[6%] top-16 -z-10 h-72 w-72 rounded-full border border-[#D7E2E6] bg-white/70 blur-3xl" />
        <div className="absolute bottom-16 right-[8%] -z-10 h-80 w-80 rounded-full border border-[#D7E2E6] bg-white/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>SOBRE MÍ</Eyebrow>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-[#1F3B41] sm:text-5xl lg:text-6xl">
              Comprometida con el bienestar y la calidad de vida de cada paciente.
            </h1>
            <div className="mt-8 max-w-2xl">
              <TextStack>
                <p>
                  Cursé la Licenciatura en Veterinaria en la Universitat Autònoma
                  de Barcelona, finalizando mis estudios en 2004. Desde entonces,
                  he desarrollado mi actividad clínica principalmente en el
                  Hospital Veterinari Santa Susanna, donde he ejercido durante más
                  de veinte años en distintas áreas de la medicina veterinaria,
                  incluyendo la atención de urgencias, la hospitalización y la
                  medicina interna.
                </p>
              </TextStack>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-[1.75rem] border border-[#D7E2E6] bg-white/80 shadow-[0_18px_55px_rgba(15,15,15,0.06)] lg:block" />
            <div className="absolute -right-4 bottom-24 hidden h-16 w-16 rounded-full border border-[#D7E2E6] bg-white/80 shadow-[0_18px_55px_rgba(15,15,15,0.06)] lg:block" />
            <div className="relative overflow-hidden rounded-[3rem] border border-[#D7E2E6] bg-white p-3 shadow-[0_35px_100px_rgba(15,15,15,0.12)]">
              <Image
                src="/images/laia-borque.jpg"
                alt=""
                width={980}
                height={1160}
                priority
                className="aspect-[4/5] w-full rounded-[2.35rem] object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-6 right-6 rounded-[1.6rem] border border-[#D7E2E6] bg-white/80 p-5 shadow-[0_24px_70px_rgba(15,15,15,0.14)] backdrop-blur-md sm:left-auto sm:right-8 sm:w-80">
              <p className="text-lg font-semibold text-[#1F3B41]">Laia Borque</p>
              <p className="mt-1 text-sm leading-6 text-[#486D75]">
                GPCert Dermatology · Acreditada en Dermatología
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3">
          {heroCapsules.map((capsule) => (
            <span
              key={capsule}
              className="rounded-full border border-[#D7E2E6] bg-white px-5 py-3 text-sm font-semibold text-[#1F3B41] shadow-[0_14px_40px_rgba(15,15,15,0.045)]"
            >
              {capsule}
            </span>
          ))}
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 rounded-[2rem] border border-[#D7E2E6] bg-[#F7F8FA] lg:block" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D7E2E6] bg-[#F7F8FA] p-3 shadow-[0_28px_80px_rgba(15,15,15,0.08)]">
              <Image
                src="/images/laia-consulta.jpg"
                alt=""
                width={880}
                height={980}
                className="aspect-[5/6] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>

          <div className="relative max-w-3xl pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#D7E2E6]" />
            <div className="mb-8 h-1 w-16 rounded-full bg-[#486D75]" />
            <TextStack>
              <p>
                Cursé la Licenciatura en Veterinaria en la Universitat Autònoma
                de Barcelona, finalizando mis estudios en 2004. Desde entonces,
                he desarrollado mi actividad clínica principalmente en el
                Hospital Veterinari Santa Susanna, donde he ejercido durante más
                de veinte años en distintas áreas de la medicina veterinaria,
                incluyendo la atención de urgencias, la hospitalización y la
                medicina interna.
              </p>
              <p>
                Con el paso de los años, la dermatología se convirtió en el eje
                principal de mi actividad clínica y en mi área de especialización.
                Desde 2011 soy responsable del Servicio de Dermatología del
                Hospital Veterinari Santa Susanna, donde he desarrollado una
                amplia experiencia en el diagnóstico y manejo de enfermedades
                dermatológicas y otológicas complejas en perros y gatos.
              </p>
              <p>
                Mi compromiso con la formación continuada me llevó a obtener el
                GPCert en Dermatología por el International School of Veterinary
                Postgraduate Studies (ISVPS) en 2022.
              </p>
              <p>
                En 2026 obtuve la acreditación en Dermatología por AVEPA, uno de
                los reconocimientos profesionales más relevantes dentro de la
                especialidad veterinaria en España.
              </p>
              <p>
                A lo largo de mi trayectoria he complementado la práctica clínica
                diaria con una formación continuada y una actualización constante
                de conocimientos, con el objetivo de ofrecer la mejor atención
                posible a cada paciente.
              </p>
            </TextStack>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F8FA]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#1F3B41] sm:text-5xl">
              Tratar pacientes, no enfermedades.
            </h2>
            <div className="mt-7 h-px w-24 bg-[#D7E2E6]" />
            <div className="mt-8">
              <TextStack>
                <p>
                  La dermatología veterinaria va mucho más allá del tratamiento
                  de una lesión cutánea, una otitis o un episodio de picor.
                </p>
                <p>
                  Detrás de cada paciente existe una historia clínica, un
                  entorno, unas circunstancias y una familia con inquietudes y
                  necesidades concretas. Por eso mi forma de trabajar se basa en
                  tratar pacientes, no enfermedades.
                </p>
                <p>
                  Cada caso es único y requiere un enfoque individualizado,
                  adaptando las pruebas diagnósticas, el tratamiento y el
                  seguimiento a las características de cada animal y de su
                  familia.
                </p>
                <p>
                  Considero fundamental escuchar a los tutores, comprender sus
                  preocupaciones y acompañarlos durante todo el proceso
                  diagnóstico y terapéutico. La comunicación y la confianza son
                  herramientas tan importantes como cualquier tratamiento.
                </p>
                <p>
                  Además de controlar los síntomas, mi objetivo es identificar las
                  causas que originan el problema y trabajar en la prevención de
                  futuras recaídas, especialmente en enfermedades dermatológicas
                  crónicas como la dermatitis atópica o las otitis recurrentes.
                </p>
                <p>
                  Busco proporcionar soluciones duraderas, mejorar la calidad de
                  vida de cada paciente y acompañar a las familias durante todo
                  el proceso, buscando siempre el mejor resultado posible para
                  cada caso.
                </p>
                <p>
                  La dermatología exige formación, capacidad diagnóstica y una
                  atención personalizada para cada paciente. Por ello, mi
                  compromiso es ofrecer una atención basada en la evidencia
                  científica, la experiencia clínica y una comunicación cercana
                  tanto con las familias como con los veterinarios remitentes.
                </p>
              </TextStack>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-[#D7E2E6] bg-white" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#D7E2E6] bg-white p-3 shadow-[0_24px_70px_rgba(15,15,15,0.07)]">
                <Image
                  src="/images/detalle-dermatologia.jpg"
                  alt=""
                  width={680}
                  height={760}
                  className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {workCapsules.map((capsule) => (
                  <span
                    key={capsule}
                    className="rounded-full border border-[#D7E2E6] bg-white px-4 py-2 text-sm font-semibold text-[#1F3B41] shadow-[0_12px_35px_rgba(15,15,15,0.04)]"
                  >
                    {capsule}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#1F3B41] sm:text-4xl">
            Formación y trayectoria profesional
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative pl-8">
              <div className="absolute bottom-3 left-2 top-3 w-px bg-[#D7E2E6]" />
              <div className="space-y-6">
                {timelineItems.map((item) => (
                  <div key={item} className="relative">
                    <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-[#1F3B41] ring-8 ring-[#F7F8FA]" />
                    <p className="text-base font-semibold leading-7 text-[#1F3B41]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <SmallCard className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-[#1F3B41]">Formación</h3>
                <div className="mt-5">
                  <List items={formacion} />
                </div>
              </SmallCard>

              <SmallCard className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-[#1F3B41]">
                  Experiencia profesional
                </h3>
                <p className="mt-5 text-base font-semibold text-[#1F3B41]">
                  Hospital Veterinari Santa Susanna (2004 – actualidad)
                </p>
                <div className="mt-4">
                  <List items={santaSusanna} />
                </div>
              </SmallCard>

              <SmallCard className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-[#1F3B41]">
                  Hospital Costa Brava
                </h3>
                <p className="mt-5 text-base font-semibold text-[#1F3B41]">
                  Hospital Costa Brava (2024 – 2026)
                </p>
                <div className="mt-4">
                  <List items={costaBrava} />
                </div>
              </SmallCard>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1F3B41] sm:text-4xl">
              Formación avanzada y estancias clínicas
            </h2>
            <div className="mt-7">
              <TextStack>
                <p>
                  Con el objetivo de seguir ampliando conocimientos y mantenerme
                  actualizada en los últimos avances de la dermatología
                  veterinaria, he realizado estancias formativas junto a
                  referentes nacionales de la especialidad:
                </p>
              </TextStack>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {estancias.map((estancia, index) => (
              <SmallCard
                key={estancia.title}
                className={`p-7 sm:p-8 ${index === 1 ? "lg:translate-y-8" : ""}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#486D75]">
                  {estancia.title}
                </p>
                <p className="mt-5 text-lg leading-8 text-[#486D75]">
                  {estancia.text}
                </p>
              </SmallCard>
            ))}
          </div>

          <div className="mt-16 max-w-4xl">
            <TextStack>
              <p>
                Además, participo de forma regular en congresos, cursos y
                programas de formación especializados en dermatología veterinaria,
                tanto a nivel nacional como internacional.
              </p>
            </TextStack>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 h-1 w-16 rounded-full bg-[#486D75]" />
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#1F3B41] sm:text-4xl">
            Actividad científica y divulgativa
          </h2>
          <div className="mt-8 max-w-4xl">
            <TextStack>
              <p>
                La formación y el intercambio de conocimientos forman parte
                fundamental de mi actividad profesional.
              </p>
              <p>
                A lo largo de mi trayectoria he participado en congresos y
                reuniones científicas especializadas, presentando y compartiendo
                casos clínicos dermatológicos con otros profesionales
                veterinarios.
              </p>
            </TextStack>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SmallCard className="p-7 sm:p-8">
              <h3 className="text-2xl font-semibold text-[#1F3B41]">
                Congresos y casos clínicos
              </h3>
              <div className="mt-6">
                <List items={congresosCasos} />
              </div>
            </SmallCard>

            <SmallCard className="p-7 sm:p-8 lg:translate-y-8">
              <h3 className="text-2xl font-semibold text-[#1F3B41]">
                Formación y divulgación
              </h3>
              <div className="mt-6">
                <List items={formacionDivulgacion} />
              </div>
            </SmallCard>
          </div>
        </div>
      </Section>

      <section className="bg-[#F7F8FA] px-6 pb-20 pt-8 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#1F3B41] shadow-[0_30px_90px_rgba(15,15,15,0.16)]">
          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="absolute right-10 top-8 h-24 w-24 rounded-full border border-white/15" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Contacto profesional
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                Para consultas dermatológicas, seguimiento de casos o
                colaboraciones profesionales.
              </p>
            </div>
            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contacto"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#1F3B41] transition hover:bg-[#F7F8FA]"
              >
                Contactar
              </Link>
              <Link
                href="/area-profesional"
                className="rounded-full border border-white/55 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Área profesional
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
