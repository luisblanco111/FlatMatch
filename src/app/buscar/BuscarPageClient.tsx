"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import RoomCard from "@/components/rooms/RoomCard";
import { rooms } from "@/data/rooms";

export default function BuscarPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const maxRoommates = searchParams.get("maxRoommates") ?? "";
  const onlyWifi = searchParams.get("wifi") === "true";
  const badge = searchParams.get("badge") ?? "";
  const sort = searchParams.get("sort") ?? "";

  function updateParam(key: string, value: string | boolean) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "" || value === false) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function removeParam(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function resetFilters() {
    router.replace(pathname, { scroll: false });
  }

  const filteredRooms = useMemo(() => {
    const filtered = rooms.filter((room) => {
      const matchesSearch =
        search.trim() === "" ||
        room.location.toLowerCase().includes(search.toLowerCase()) ||
        room.title.toLowerCase().includes(search.toLowerCase());

      const numericPrice = Number(room.price.replace(/[^\d]/g, ""));
      const matchesPrice =
        maxPrice === "" || numericPrice <= Number(maxPrice);

      const matchesWifi = !onlyWifi || room.wifi;

      const matchesRoommates =
        maxRoommates === "" || room.roommates <= Number(maxRoommates);

      const matchesBadge = badge === "" || room.badge === badge;

      return (
        matchesSearch &&
        matchesPrice &&
        matchesWifi &&
        matchesRoommates &&
        matchesBadge
      );
    });

    const sorted = [...filtered].sort((a, b) => {
      const priceA = Number(a.price.replace(/[^\d]/g, ""));
      const priceB = Number(b.price.replace(/[^\d]/g, ""));

      switch (sort) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "roommates-asc":
          return a.roommates - b.roommates;
        case "roommates-desc":
          return b.roommates - a.roommates;
        default:
          return 0;
      }
    });

    return sorted;
  }, [search, maxPrice, maxRoommates, onlyWifi, badge, sort]);

  const sortLabels: Record<string, string> = {
    "price-asc": "Precio ↑",
    "price-desc": "Precio ↓",
    "roommates-asc": "Menos compañeros",
    "roommates-desc": "Más compañeros",
  };

  const activeFilters = [
    search ? { key: "search", label: `Zona: ${search}` } : null,
    maxPrice ? { key: "maxPrice", label: `Máx. ${maxPrice}€` } : null,
    maxRoommates
      ? {
          key: "maxRoommates",
          label: `Hasta ${maxRoommates} compañero${maxRoommates === "1" ? "" : "s"}`,
        }
      : null,
    onlyWifi ? { key: "wifi", label: "Con wifi" } : null,
    badge ? { key: "badge", label: badge } : null,
    sort ? { key: "sort", label: sortLabels[sort] ?? "Orden aplicado" } : null,
  ].filter(Boolean) as { key: string; label: string }[];

  return (
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
            Explora habitaciones disponibles según ubicación, precio y preferencias.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Ciudad o zona
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => updateParam("search", e.target.value)}
                placeholder="Ej. Madrid o Chamberí"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Precio máximo
              </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => updateParam("maxPrice", e.target.value)}
                placeholder="Ej. 500"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Máx. compañeros
              </label>
              <select
                value={maxRoommates}
                onChange={(e) => updateParam("maxRoommates", e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              >
                <option value="">Cualquiera</option>
                <option value="1">1 o menos</option>
                <option value="2">2 o menos</option>
                <option value="3">3 o menos</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tipo destacado
              </label>
              <select
                value={badge}
                onChange={(e) => updateParam("badge", e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              >
                <option value="">Todos</option>
                <option value="Top Match">Top Match</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Verificado">Verificado</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={resetFilters}
                className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Limpiar filtros
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <input
              id="wifi"
              type="checkbox"
              checked={onlyWifi}
              onChange={(e) => updateParam("wifi", e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="wifi" className="text-sm text-slate-700">
              Mostrar solo habitaciones con wifi
            </label>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-3">
            {activeFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => removeParam(filter.key)}
                className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
              >
                {filter.label}
                <X className="h-4 w-4" />
              </button>
            ))}

            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-300"
            >
              Borrar todos
            </button>
          </div>
        )}

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Habitaciones disponibles
            </h2>

            <p className="text-sm text-slate-500">
              {filteredRooms.length} resultado{filteredRooms.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Ordenar por
            </label>
            <select
              value={sort}
              onChange={(e) => updateParam("sort", e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 sm:min-w-[240px]"
            >
              <option value="">Recomendados</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="roommates-asc">Menos compañeros</option>
              <option value="roommates-desc">Más compañeros</option>
            </select>
          </div>
        </div>

        {filteredRooms.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h3 className="text-lg font-semibold text-slate-900">
              No se han encontrado habitaciones
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Prueba a cambiar los filtros para ver más resultados.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}