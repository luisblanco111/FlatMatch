import Link from "next/link";
import {
  HousePlus,
  UserRound,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react";

const publisherTypes = [
  {
    icon: UserRound,
    title: "Particular",
    description:
      "Publica una habitación de tu vivienda y encuentra a la persona adecuada para convivir.",
    href: "/registrarse/particular",
    cta: "Publicar como particular",
  },
  {
    icon: Building2,
    title: "Inmobiliaria",
    description:
      "Gestiona varios inmuebles y publica anuncios con una experiencia profesional y ordenada.",
    href: "/registrarse/inmobiliaria",
    cta: "Publicar como inmobiliaria",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Más visibilidad",
    description:
      "Presenta tu habitación de forma visual, clara y atractiva para captar más interés.",
  },
  {
    icon: ShieldCheck,
    title: "Mejor compatibilidad",
    description:
      "Flat Match está pensado para conectar anuncios con perfiles que encajen mejor.",
  },
  {
    icon: MessagesSquare,
    title: "Gestión sencilla",
    description:
      "Centraliza tus publicaciones y contactos en una experiencia simple e intuitiva.",
  },
];

function BenefitCard({
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

function PublisherCard({
  icon: Icon,
  title,
  description,
  href,
  cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <Icon className="h-7 w-7 text-slate-800" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>

      <Link
        href={href}
        className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        {cta}
      </Link>
    </div>
  );
}

export default function PublicarPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Publicar habitación
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Publica tu habitación y encuentra a la persona adecuada
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Flat Match te permite mostrar tu anuncio de forma visual y conectar
            con perfiles más compatibles, ya seas particular o inmobiliaria.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/registrarse/particular"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Empezar a publicar
            </Link>

            <Link
              href="/como-funciona"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Ver cómo funciona
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            ¿Por qué publicar en Flat Match?
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Más que un portal de anuncios: una experiencia pensada para encontrar
            mejores encajes entre habitaciones y personas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Elige cómo quieres publicar
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Selecciona el tipo de cuenta que mejor se adapta a tu perfil.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {publisherTypes.map((type) => (
              <PublisherCard
                key={type.title}
                icon={type.icon}
                title={type.title}
                description={type.description}
                href={type.href}
                cta={type.cta}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Próximamente
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Así será el flujo de publicación
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              En las siguientes fases del proyecto podrás crear anuncios completos
              con fotos, precio, ubicación, características del piso y perfil
              ideal del inquilino.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <ol className="space-y-5">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Crear anuncio
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Añade fotos, precio, ubicación y detalles del inmueble.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Definir preferencias
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Indica qué tipo de inquilino buscas y cómo es la convivencia.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Recibir contactos
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Revisa perfiles interesados y elige el mejor encaje.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-lg">
          <div className="max-w-3xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <HousePlus className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Empieza a publicar en Flat Match
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Da de alta tu perfil y prepara tu anuncio para encontrar el mejor
              match posible.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/registrarse/particular"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Soy particular
              </Link>

              <Link
                href="/registrarse/inmobiliaria"
                className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Soy inmobiliaria
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}