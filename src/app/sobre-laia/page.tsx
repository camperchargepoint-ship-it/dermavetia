import Image from "next/image";
import type { ReactNode } from "react";

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
  "Estancia en Dermatología junto al Dr. Gustavo Machicote (Clínica Veterinaria Vilanova, 2009).",
  "Estancia en Dermatología junto a la Dra. Laura Ordeix (Hospital Clínic Veterinari de Bellaterra, 2019).",
];

const actividad = [
  "Participación con casos clínicos en los congresos del Grupo de Trabajo de Dermatología y Alergología (GTA) en 2018, 2019 y 2021.",
  "Participación con casos clínicos en SEVC 2020.",
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
    <section className={`px-5 py-16 sm:px-8 sm:py-20 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

function TextStack({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6 text-base leading-8 text-[#486D75] sm:text-lg sm:leading-9">
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-5 py-3 text-sm text-[#486D75]">
      <span className="h-px flex-1 bg-[#D7E2E6]" />
      <span>⸻</span>
      <span className="h-px flex-1 bg-[#D7E2E6]" />
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="grid grid-cols-[0.5rem_1fr] gap-4 text-sm leading-7 text-[#486D75] sm:text-base"
        >
          <span className="mt-3 h-2 w-2 rounded-full bg-[#486D75]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-[#D7E2E6] bg-white p-6 shadow-[0_20px_70px_rgba(15,15,15,0.045)] sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

function ImagePanel({
  src,
  className = "",
  priority = false,
}: {
  src: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[#D7E2E6] bg-white p-2 shadow-[0_26px_85px_rgba(15,15,15,0.08)] ${className}`}
    >
      <Image
        src={src}
        alt=""
        width={1100}
        height={1320}
        priority={priority}
        className="h-full w-full rounded-md object-cover"
      />
    </div>
  );
}

export default function SobreLaiaPage() {
  return (
    <main className="bg-[#F7F8FA] text-[#0F0F0F]">
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8 h-px w-24 bg-[#486D75]" />
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#486D75]">
              SOBRE MI
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-normal text-[#1F3B41] sm:text-5xl lg:text-6xl">
              Comprometida con el bienestar y la calidad de vida de cada paciente.
            </h1>
            <div className="mt-10 max-w-2xl">
              <TextStack>
                <p>
                  Cursé la Licenciatura en Veterinaria en la Universitat Autònoma
                  de Barcelona, finalizando mis estudios en 2004. Desde entonces,
                  he desarrollado mi actividad clínica principalmente en el
                  Hospital Veterinari Santa Susanna, donde he ejercido durante
                  más de veinte años en distintas áreas de la medicina
                  veterinaria, incluyendo la atención de urgencias, la
                  hospitalización y la medicina interna.
                </p>
              </TextStack>
            </div>
          </div>

          <div className="order-1 grid gap-4 sm:grid-cols-[1fr_0.72fr] lg:order-2 lg:gap-5">
            <ImagePanel
              src="/images/laia/laia1.png"
              priority
              className="h-[58vh] min-h-[420px] sm:h-[640px]"
            />
            <div className="grid gap-4 lg:gap-5">
              <ImagePanel
                src="/images/laia/laia2.png"
                className="hidden h-[300px] sm:block"
              />
              <div
                className="min-h-40 rounded-lg border border-[#D7E2E6] bg-[#F7F8FA] p-5"
                aria-hidden="true"
              >
                <div className="h-px w-12 bg-[#486D75]" />
                <div className="mt-16 h-px w-full bg-[#D7E2E6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#F7F8FA]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <ImagePanel
              src="/images/laia/laia-paciente.png"
              className="h-[440px] sm:h-[560px] lg:h-[680px]"
            />
          </div>

          <div className="space-y-8">
            <TextStack>
              <p>
                Con el paso de los años, la dermatología se convirtió en el eje
                principal de mi actividad clínica y en mi área de
                especialización. Desde 2011 soy responsable del Servicio de
                Dermatología del Hospital Veterinari Santa Susanna, donde he
                desarrollado una amplia experiencia en el diagnóstico y manejo de
                enfermedades dermatológicas y otológicas complejas en perros y
                gatos.
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
            <Divider />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#1F3B41] sm:text-5xl">
                Mi forma de trabajar
              </h2>
              <div className="mt-8">
                <TextStack>
                  <p>
                    La dermatología veterinaria va mucho más allá del tratamiento
                    de una lesión cutánea, una otitis o un episodio de picor.
                  </p>
                  <p>
                    Detrás de cada paciente existe una historia clínica, un
                    entorno, unas circunstancias y una familia con inquietudes y
                    necesidades concretas. Por eso mi forma de trabajar se basa
                    en tratar pacientes, no enfermedades.
                  </p>
                  <p>
                    Cada caso es único y requiere un enfoque individualizado,
                    adaptando las pruebas diagnósticas, el tratamiento y el
                    seguimiento a las características de cada animal y de su
                    familia.
                  </p>
                </TextStack>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ImagePanel
                src="/images/laia/laia-practica.png"
                className="h-[320px] sm:h-[420px]"
              />
              <Card className="self-end bg-[#F7F8FA]">
                <p className="text-base leading-8 text-[#486D75]">
                  Considero fundamental escuchar a los tutores, comprender sus
                  preocupaciones y acompañarlos durante todo el proceso
                  diagnóstico y terapéutico. La comunicación y la confianza son
                  herramientas tan importantes como cualquier tratamiento.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <ImagePanel
              src="/images/laia/laia-microscopio.png"
              className="h-[360px] lg:h-[520px]"
            />
            <div className="rounded-lg border border-[#D7E2E6] bg-white p-6 sm:p-9">
              <TextStack>
                <p>
                  Además de controlar los síntomas, mi objetivo es identificar
                  las causas que originan el problema y trabajar en la prevención
                  de futuras recaídas, especialmente en enfermedades
                  dermatológicas crónicas como la dermatitis atópica o las otitis
                  recurrentes.
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

          <div className="mt-12">
            <Divider />
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#1F3B41] sm:text-5xl">
                Formación y trayectoria profesional
              </h2>
            </div>
            <ImagePanel
              src="/images/laia/laia-lola.png"
              className="h-[360px] sm:h-[440px] lg:h-[520px]"
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card>
              <h3 className="text-2xl font-semibold text-[#1F3B41]">
                Formación
              </h3>
              <div className="mt-6">
                <List items={formacion} />
              </div>
            </Card>

            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-[#1F3B41]">
                Experiencia profesional
              </h3>
              <div className="mt-7 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-base font-semibold leading-7 text-[#1F3B41]">
                    Hospital Veterinari Santa Susanna (2004 – actualidad)
                  </p>
                  <div className="mt-5">
                    <List items={santaSusanna} />
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold leading-7 text-[#1F3B41]">
                    Hospital Costa Brava (2024 – 2026)
                  </p>
                  <div className="mt-5">
                    <List items={costaBrava} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#1F3B41] sm:text-5xl">
              Formación avanzada y estancias clínicas
            </h2>
            <div className="mt-8">
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

          <div className="grid content-start gap-5">
            {estancias.map((item) => (
              <Card key={item}>
                <p className="text-base leading-8 text-[#486D75] sm:text-lg">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <div className="max-w-4xl">
            <TextStack>
              <p>
                Además, participo de forma regular en congresos, cursos y
                programas de formación especializados en dermatología
                veterinaria, tanto a nivel nacional como internacional.
              </p>
            </TextStack>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#1F3B41] sm:text-5xl">
                Actividad científica y divulgativa
              </h2>
            </div>
            <div>
              <TextStack>
                <p>
                  La formación y el intercambio de conocimientos forman parte
                  fundamental de mi actividad profesional.
                </p>
                <p>
                  A lo largo de mi trayectoria he participado en congresos y
                  reuniones científicas especializadas, presentando y
                  compartiendo casos clínicos dermatológicos con otros
                  profesionales veterinarios.
                </p>
              </TextStack>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-[#D7E2E6] bg-white p-6 shadow-[0_20px_70px_rgba(15,15,15,0.045)] sm:p-8">
            <List items={actividad} />
          </div>
        </div>
      </Section>
    </main>
  );
}
