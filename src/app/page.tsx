export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-[#254247]">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:px-12">
        <div className="space-y-8">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#4A6A72]">
              Próximamente
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              Estamos preparando la nueva web de Dermavetia
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4A6A72]">
              Dermatología veterinaria especializada para perros y gatos.
              Mientras trabajamos en este nuevo espacio, seguimos atendiendo
              consultas dermatológicas, colaborando con veterinarios y
              acompañando a nuestros pacientes.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#D6E0E3] p-6">
            <h2 className="mb-4 text-xl font-medium text-[#254247]">
              Mientras preparamos la web completa, seguimos atendiendo:
            </h2>

            <ul className="grid gap-3 text-[#254247] sm:grid-cols-2">
              <li>✓ Consultas dermatológicas</li>
              <li>✓ Casos complejos de piel y oído</li>
              <li>✓ Segunda opinión especializada</li>
              <li>✓ Valoraciones dermatológicas</li>
              <li>✓ Colaboración con clínicas veterinarias</li>
              <li>✓ Seguimiento de pacientes dermatológicos</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              className="rounded-full bg-[#254247] px-6 py-3 text-center text-[#FBFBFB] transition hover:bg-[#0F0F0F]"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="mailto:info@dermavetia.com"
              className="rounded-full border border-[#254247] px-6 py-3 text-center text-[#254247] transition hover:bg-[#254247] hover:text-[#FBFBFB]"
            >
              Derivar un caso por email
            </a>

            <a
              href="https://www.instagram.com/dermavetia"
              target="_blank"
              className="rounded-full border border-[#4A6A72] px-6 py-3 text-center text-[#254247] transition hover:bg-[#D6E0E3]"
            >
              Instagram
            </a>
          </div>

          <div className="pt-6 text-sm text-[#4A6A72]">
            <p className="font-medium text-[#254247]">Laia Borque</p>
            <p>GPCert Dermatology · Acreditada en Dermatología por AVEPA</p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#D6E0E3] shadow-2xl">
            <img
              src="/hero-dermavetia.jpg"
              alt="Dermatología veterinaria especializada para perros y gatos"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-[1.5rem] bg-[#FBFBFB] p-5 shadow-xl md:block">
            <p className="text-sm uppercase tracking-[0.22em] text-[#4A6A72]">
              Dermatología veterinaria
            </p>
            <p className="mt-2 text-lg font-medium text-[#254247]">
              Piel · Oído · Seguimiento
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}