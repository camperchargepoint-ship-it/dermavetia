type HeroProps = {
  title: string;
};

export default function Hero({ title }: HeroProps) {
  return (
    <section className="bg-dermavetia-white">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-normal text-dermavetia-forest sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
