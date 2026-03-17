import { ReactNode } from "react";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type RegisterLayoutProps = {
  children: ReactNode;
};

const benefits = [
  {
    icon: Users,
    title: "Perfiles compatibles",
    description: "Conecta con personas, propietarios e inmobiliarias afines.",
  },
  {
    icon: Sparkles,
    title: "Proceso simple",
    description: "Un flujo claro para registrarte y empezar en pocos pasos.",
  },
  {
    icon: ShieldCheck,
    title: "Entorno fiable",
    description: "Diseño pensado para transmitir confianza y claridad.",
  },
];

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <>

      <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {children}
            </section>

            <aside className="hidden rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm lg:block">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-blue-100">
                Flat Match
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                Encuentra la forma más fácil de conectar oferta y demanda
              </h2>

              <p className="mt-4 max-w-md text-slate-300">
                Tanto si buscas habitación como si quieres publicar un inmueble,
                este flujo está pensado para que empieces rápido y con una
                experiencia clara.
              </p>

              <div className="mt-10 space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                        <Icon size={22} />
                      </div>

                      <h3 className="mt-4 text-lg font-semibold">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </main>

    </>
  );
}