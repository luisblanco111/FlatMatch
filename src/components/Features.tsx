const features = [
  {
    title: "Matching inteligente",
    description:
      "Encuentra opciones compatibles según presupuesto, ubicación y preferencias de convivencia.",
  },
  {
    title: "Publicación sencilla",
    description:
      "Propietarios e inmobiliarias pueden publicar habitaciones y pisos en pocos pasos.",
  },
  {
    title: "Contacto directo",
    description:
      "Facilitamos la conexión entre la demanda y la oferta sin procesos complicados.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="rounded-full bg-slate-200 px-4 py-1 text-sm font-medium text-slate-700">
          Ventajas
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Una plataforma pensada para compartir piso
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Diseñada para hacer más fácil la búsqueda de habitación y la gestión de
          anuncios.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-100" />
            <h3 className="text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}