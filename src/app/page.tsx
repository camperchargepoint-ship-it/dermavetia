export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-[#254247]">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-6 lg:grid-cols-2 lg:px-12">
        <div className="space-y-5">
          <div>
            <img
              src="/images/Logo_Redondo.png"
              alt="Dermavetia"
              className="mb-5 h-[5.6rem] w-auto"
            />

            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#4A6A72]">
              Próximamente
            </p>

            <h1 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.75rem]">
              Estamos preparando la nueva web de Dermavetia
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#4A6A72]">
              Dermatología veterinaria especializada para perros y gatos.
              Mientras trabajamos en este nuevo espacio, seguimos atendiendo
              consultas dermatológicas, colaborando con veterinarios y
              acompañando a nuestros pacientes.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#D6E0E3] p-6">
            <h2 className="mb-3 text-lg font-medium text-[#254247]">
              Mientras preparamos la web completa, seguimos atendiendo:
            </h2>

            <ul className="grid gap-2 text-sm text-[#254247] sm:grid-cols-2">
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
              href="https://wa.me/34655286207"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#254247] px-5 py-2.5 text-center text-sm text-[#FBFBFB] transition hover:bg-[#0F0F0F]"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="mailto:laiaborque@dermavetia.com"
              className="rounded-full border border-[#254247] px-5 py-2.5 text-center text-sm text-[#254247] transition hover:bg-[#254247] hover:text-[#FBFBFB]"
            >
              Derivar un caso por email
            </a>

            <a
              href="https://www.instagram.com/dermavetia"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4A6A72] px-5 py-2.5 text-center text-sm text-[#254247] transition hover:bg-[#D6E0E3]"
            >
              Instagram
            </a>
          </div>

        </div>

        <div className="relative">
          <div className="h-[52vh] min-h-[360px] max-h-[560px] overflow-hidden rounded-[2.5rem] bg-[#D6E0E3] shadow-2xl">
            <img
              src="public/images/laia/laia-paciente.PNG"
              alt="Dermatología veterinaria especializada para perros y gatos"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 rounded-[2rem] border border-white/30 bg-white/70 p-5 shadow-[0_16px_38px_rgba(37,66,71,0.12)] backdrop-blur-md md:absolute md:-bottom-5 md:-left-5 md:mt-0 md:min-w-[18rem]">
            <div className="mb-3 h-px w-12 bg-[#4A6A72]" />

            <p className="text-base font-semibold text-[#254247]">
              Laia Borque
            </p>

            <p className="mt-2 text-sm leading-6 text-[#4A6A72]">
              GPCert Dermatology
              <br />
              Acreditada en Dermatología
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
