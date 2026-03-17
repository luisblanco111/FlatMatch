import { Search, HeartHandshake, House } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Busca",
    description:
      "Explora habitaciones y pisos compartidos según ciudad, presupuesto y estilo de vida.",
  },
  {
    icon: HeartHandshake,
    title: "Haz match",
    description:
      "Descubre opciones que encajan mejor contigo y con tus preferencias de convivencia.",
  },
  {
    icon: House,
    title: "Elige",
    description:
      "Contacta, compara y decide con más confianza cuál será tu próximo hogar.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
            Cómo funciona
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Encontrar habitación puede ser mucho más simple
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Un proceso claro para conectar personas, habitaciones y oportunidades.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}