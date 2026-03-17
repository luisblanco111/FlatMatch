import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, Users, Wifi, ShieldCheck, Sparkles } from "lucide-react";
import { rooms } from "@/data/rooms";

type RoomPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getBadgeStyles(badge?: string) {
  switch (badge) {
    case "Top Match":
      return "bg-blue-600 text-white";
    case "Nuevo":
      return "bg-emerald-100 text-emerald-700";
    case "Verificado":
      return "bg-violet-100 text-violet-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getBadgeIcon(badge?: string) {
  switch (badge) {
    case "Top Match":
      return <Sparkles size={14} />;
    case "Verificado":
      return <ShieldCheck size={14} />;
    default:
      return null;
  }
}

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: String(room.id),
  }));
}

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((item) => item.id === Number(id));

  if (!room) {
    return {
      title: "Habitación no encontrada | Flat Match",
      description: "La habitación que buscas no existe o ya no está disponible.",
    };
  }

  return {
    title: `${room.title} | Flat Match`,
    description: `${room.location} · ${room.price} · ${room.details}`,
  };
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const { id } = await params;

  const roomId = Number(id);
  const room = rooms.find((item) => item.id === roomId);

  if (!room) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src={room.image}
                alt={room.title}
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
                  {room.availableLabel}
                </span>

                {room.badge && (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold ${getBadgeStyles(
                      room.badge
                    )}`}
                  >
                    {getBadgeIcon(room.badge)}
                    {room.badge}
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
                {room.title}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-slate-600">
                <MapPin size={18} />
                <span>{room.location}</span>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {room.details}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-3 text-slate-800">
                    <Users size={18} />
                    <span className="font-medium">
                      {room.roommates} compañero{room.roommates > 1 ? "s" : ""}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Compartirás piso con este número de personas.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-3 text-slate-800">
                    <Wifi size={18} />
                    <span className="font-medium">
                      {room.wifi ? "Wifi incluido" : "Sin wifi"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Información básica del anuncio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Precio mensual
              </p>

              <p className="mt-2 text-4xl font-bold text-blue-600">
                {room.price}
              </p>

              <div className="mt-6 space-y-3">
                <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Contactar
                </button>

                <button className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                  Guardar en favoritos
                </button>
              </div>

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <h2 className="text-sm font-semibold text-blue-900">
                  Match recomendado
                </h2>
                <p className="mt-2 text-sm leading-6 text-blue-800">
                  Esta sección podrá mostrar en el futuro por qué esta habitación
                  encaja contigo según preferencias, presupuesto y estilo de vida.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}