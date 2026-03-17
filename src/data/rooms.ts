import { Room } from "@/types/room";

export const rooms: Room[] = [
  {
    id: 1,
    title: "Habitación luminosa en Chamberí",
    location: "Madrid, Chamberí",
    price: "450€/mes",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    details: "Gastos incluidos · Cocina equipada · Ambiente tranquilo",
    roommates: 2,
    wifi: true,
    availableLabel: "Disponible ya",
    badge: "Top Match",
  },
  {
    id: 2,
    title: "Piso compartido cerca del centro",
    location: "Valencia, Ruzafa",
    price: "380€/mes",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    details: "Amueblado · Buena conexión de transporte · Muy luminoso",
    roommates: 3,
    wifi: true,
    availableLabel: "Disponible en abril",
    badge: "Nuevo",
  },
  {
    id: 3,
    title: "Habitación moderna para estudiante",
    location: "Barcelona, Gràcia",
    price: "520€/mes",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    details: "Zona universitaria · Reformado · Ideal para larga estancia",
    roommates: 1,
    wifi: true,
    availableLabel: "Disponible ya",
    badge: "Verificado",
  },
];