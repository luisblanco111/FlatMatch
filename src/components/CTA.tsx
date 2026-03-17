import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-blue-600 px-8 py-12 text-center text-white md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Empieza hoy a encontrar tu próximo piso
          </h2>
          <p className="mt-3 max-w-2xl text-blue-100">
            Crea tu perfil, explora habitaciones y encuentra opciones que encajen
            contigo.
          </p>
        </div>

        <Link
          href="/registrarse"
          className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-slate-100"
        >
          Crear cuenta gratis
        </Link>
      </div>
    </section>
  );
}