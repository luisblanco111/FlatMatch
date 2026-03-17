import Link from "next/link";
import {
  Search,
  HeartHandshake,
  House,
  UserRound,
  Building2,
  CheckCircle2,
} from "lucide-react";

const tenantSteps = [
  {
    icon: Search,
    title: "Busca habitaciones",
    description:
      "Explora anuncios según ciudad, presupuesto, estilo de vida y compatibilidad.",
  },
  {
    icon: HeartHandshake,
    title: "Encuentra tu match",
    description:
      "Flat Match te ayudará a descubrir habitaciones y compañeros más afines a ti.",
  },
  {
    icon: House,
    title: "Conecta y decide",
    description:
      "Contacta con anunciantes, guarda favoritos y elige el piso que mejor encaje contigo.",
  },
];

const ownerSteps = [
  {
    icon: UserRound,
    title: "Publica tu habitación",
    description:
      "Crea un anuncio atractivo con fotos, precio, ubicación y detalles del piso.",
  },
  {
    icon: HeartHandshake,
    title: "Recibe perfiles compatibles",
    description:
      "La plataforma priorizará personas que encajen mejor con tu vivienda y convivencia.",
  },
  {
    icon: CheckCircle2,
    title: "Gestiona tus contactos",
    description:
      "Revisa interesados, compara perfiles y elige al candidato ideal.",
  },
];

const agencySteps = [
  {
    icon: Building2,
    title: "Gestiona varios inmuebles",
    description:
      "Centraliza habitaciones y anuncios desde una misma cuenta profesional.",
  },
  {
    icon: Search,
    title: "Optimiza la visibilidad",
    description:
      "Publica anuncios claros y ordenados para llegar al público adecuado.",
  },
  {
    icon: CheckCircle2,
    title: "Agiliza la selección",
    description:
      "Ahorra tiempo mostrando opciones mejor alineadas con las preferencias del usuario.",
  },
];

const benefits = [
  "Matching entre perfiles y habitaciones",
  "Experiencia más humana que un portal inmobiliario tradicional",
  "Diseño pensado para inquilinos, particulares e inmobiliarias",
  "Búsqueda más rápida, clara y visual",
];

function StepCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Cómo funciona
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Una forma más inteligente de encontrar habitación y compañeros de piso
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Flat Match conecta personas, habitaciones y anunciantes en una misma
            plataforma para que encontrar piso compartido sea más fácil, más rápido
            y mucho más compatible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/registrarse"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Crear cuenta
            </Link>

            <Link
              href="/buscar"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Explorar habitaciones
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Para inquilinos
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Encuentra una habitación que encaje contigo y con tu estilo de vida.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tenantSteps.map((step) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Para particulares
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Publica habitaciones y encuentra personas compatibles para convivir mejor.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ownerSteps.map((step) => (
              <StepCard
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Para inmobiliarias
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Gestiona varios anuncios con una experiencia más clara y moderna.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {agencySteps.map((step) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="rounded-full bg-white px-4 py-1 text-sm font-medium text-blue-700">
                La diferencia de Flat Match
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                No se trata solo de una habitación. Se trata de encajar.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Flat Match está pensado para que la búsqueda no dependa solo del
                precio o la ubicación, sino también de la compatibilidad entre
                personas, vivienda y forma de convivencia.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-lg">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Empieza hoy a encontrar tu mejor match
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Tanto si buscas habitación como si quieres publicarla, Flat Match
              te ayuda a conectar mejor y decidir con más confianza.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/registrarse"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Registrarse
              </Link>

              <Link
                href="/buscar"
                className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ver habitaciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}