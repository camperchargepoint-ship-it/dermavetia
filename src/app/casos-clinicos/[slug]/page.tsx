type CasoClinicoPageProps = {
  params: {
    slug: string;
  };
};

export default function CasoClinicoPage({ params }: CasoClinicoPageProps) {
  return (
    <main>
      <h1>Caso clinico</h1>
      <p>Slug: {params.slug}</p>
    </main>
  );
}
