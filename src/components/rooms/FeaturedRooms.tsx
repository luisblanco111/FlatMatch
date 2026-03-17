import Link from "next/link";
import RoomCard from "./RoomCard";
import { rooms } from "@/data/rooms";

export default function FeaturedRooms() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Destacados
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Habitaciones destacadas
          </h2>

          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Descubre algunas de las opciones más interesantes para compartir piso.
          </p>
        </div>

        <Link
          href="/buscar"
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
        >
          Ver todas
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}