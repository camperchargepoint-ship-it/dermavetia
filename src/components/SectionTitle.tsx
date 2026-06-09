type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <section className="bg-dermavetia-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-normal text-dermavetia-forest sm:text-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
