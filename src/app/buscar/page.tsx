import { Suspense } from "react";
import BuscarPageClient from "./BuscarPageClient";

export default function BuscarPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50">
          <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                Buscar
              </span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                Encuentra tu próxima habitación
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Cargando búsqueda...
              </p>
            </div>
          </section>
        </main>
      }
    >
      <BuscarPageClient />
    </Suspense>
  );
}