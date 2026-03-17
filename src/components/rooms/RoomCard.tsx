"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MapPin, Users, Wifi, ShieldCheck, Sparkles } from "lucide-react";
import { Room } from "@/types/room";

type Props = {
  room: Room;
};

function getBadgeStyles(badge?: Room["badge"]) {
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

function getBadgeIcon(badge?: Room["badge"]) {
  switch (badge) {
    case "Top Match":
      return <Sparkles size={14} />;
    case "Verificado":
      return <ShieldCheck size={14} />;
    default:
      return null;
  }
}

export default function RoomCard({ room }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
            {room.availableLabel}
          </span>

          {room.badge && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${getBadgeStyles(
                room.badge
              )}`}
            >
              {getBadgeIcon(room.badge)}
              {room.badge}
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          onClick={() => setIsFavorite((prev) => !prev)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 backdrop-blur transition hover:scale-105"
        >
          <Heart
            size={18}
            className={isFavorite ? "fill-red-500 text-red-500" : ""}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{room.title}</h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              <span>{room.location}</span>
            </div>
          </div>

          <p className="whitespace-nowrap text-lg font-bold text-blue-600">
            {room.price}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>
              {room.roommates} compañero{room.roommates > 1 ? "s" : ""}
            </span>
          </div>

          {room.wifi && (
            <div className="flex items-center gap-2">
              <Wifi size={16} />
              <span>Wifi</span>
            </div>
          )}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{room.details}</p>

        <Link
          href={`/room/${room.id}`}
          className="mt-6 block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}