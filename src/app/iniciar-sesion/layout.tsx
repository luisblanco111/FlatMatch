import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type IniciarSesionLayoutProps = {
  children: ReactNode;
};

export default function IniciarSesionLayout({
  children,
}: IniciarSesionLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <main className="flex-1">
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:px-6 lg:grid-cols-2 lg:py-16">
          <div className="order-2 lg:order-1 flex items-center">
            {children}
          </div>

          <aside className="order-1 lg:order-2 rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 p-8 text-white shadow-xl">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                  Flat Match
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                  Encuentra tu próxima habitación con personas afines
                </h2>

                <p className="mt-4 max-w-lg text-white/90">
                  Inicia sesión para acceder a tus matches, favoritos, anuncios y
                  conversaciones dentro de Flat Match.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">+500</p>
                  <p className="text-sm text-white/85">habitaciones activas</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">+1.2k</p>
                  <p className="text-sm text-white/85">usuarios registrados</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-sm text-white/85">experiencia visual</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

    </div>
  );
}