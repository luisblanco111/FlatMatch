import Link from "next/link";
import { Building2, Home, UserRound } from "lucide-react";
import UserTypeCard from "@/components/register/UserTypeCard";

const userTypes = [
  {
    title: "Inquilino",
    slug: "inquilino",
    description:
      "Para personas que buscan habitación, piso compartido o compañeros compatibles.",
    icon: UserRound,
    features: [
      "Crear perfil personal",
      "Buscar habitaciones",
      "Recibir matches",
    ],
  },
  {
    title: "Particular",
    slug: "particular",
    description:
      "Para propietarios particulares que quieren publicar una habitación o vivienda.",
    icon: Home,
    features: [
      "Publicar anuncios",
      "Gestionar solicitudes",
      "Encontrar candidatos",
    ],
  },
  {
    title: "Inmobiliaria",
    slug: "inmobiliaria",
    description:
      "Para agencias que gestionan varias propiedades o habitaciones.",
    icon: Building2,
    features: [
      "Publicar múltiples inmuebles",
      "Gestionar cartera",
      "Acceder a más visibilidad",
    ],
  },
];

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <Link
          href="/"
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          ← Volver al inicio
        </Link>

        <span className="mx-auto mt-6 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Crear cuenta
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Elige cómo quieres registrarte
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Selecciona el tipo de cuenta que mejor encaje contigo para empezar en
          Flat Match.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {userTypes.map((type) => (
          <UserTypeCard
            key={type.title}
            title={type.title}
            slug={type.slug}
            description={type.description}
            icon={type.icon}
            features={type.features}
          />
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-900">
          ¿Ya tienes una cuenta?
        </h3>
        <p className="mt-2 text-slate-600">
          Más adelante aquí podrás iniciar sesión con tu cuenta de Flat Match.
        </p>
        <button className="mt-6 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
          Ir a iniciar sesión
        </button>
      </div>
    </div>
  );
}