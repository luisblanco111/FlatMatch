import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div className="flex flex-col justify-center">
        <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Encuentra tu piso ideal
        </span>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Conectamos personas, propietarios e inmobiliarias para compartir piso
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Flat Match te ayuda a encontrar habitaciones y compañeros compatibles
          según presupuesto, zona y estilo de vida.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/registrarse"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Empezar ahora
          </Link>

          <Link
            href="/como-funciona"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Ver cómo funciona
          </Link>
        </div>

        <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
          <div>
            <p className="text-2xl font-bold text-slate-900">1.200+</p>
            <p className="text-sm text-slate-600">Usuarios</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">350+</p>
            <p className="text-sm text-slate-600">Habitaciones</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">95%</p>
            <p className="text-sm text-slate-600">Matches útiles</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
          <h2 className="text-xl font-semibold text-slate-900">
            Busca tu próxima habitación
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Filtra por ciudad, presupuesto y tipo de vivienda.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Ciudad o zona
              </label>
              <input
                type="text"
                placeholder="Ej. Madrid, Chamberí"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Presupuesto máximo
              </label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500">
                <option>Selecciona un presupuesto</option>
                <option>Hasta 400€</option>
                <option>Hasta 600€</option>
                <option>Hasta 800€</option>
                <option>Hasta 1.000€</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tipo de búsqueda
              </label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500">
                <option>Habitación</option>
                <option>Piso compartido</option>
                <option>Estudio</option>
              </select>
            </div>

            <Link
              href="/buscar"
              className="block w-full rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Buscar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}