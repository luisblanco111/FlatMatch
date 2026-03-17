const testimonials = [
  {
    name: "Laura, 24",
    text: "Encontré una habitación mucho más rápido de lo que esperaba y además el perfil del piso encajaba bastante conmigo.",
  },
  {
    name: "Carlos, propietario",
    text: "La idea de mostrar mejor la compatibilidad me parece muy útil. Hace la búsqueda más humana y menos fría.",
  },
  {
    name: "Marta, 27",
    text: "La experiencia es más clara que en otros portales. Todo resulta más visual y fácil de entender.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Testimonios
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Lo que hace diferente a Flat Match
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Una experiencia pensada para encontrar algo más que una habitación.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-lg leading-8 text-slate-700">
              “{testimonial.text}”
            </p>

            <p className="mt-6 text-sm font-semibold text-slate-900">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}