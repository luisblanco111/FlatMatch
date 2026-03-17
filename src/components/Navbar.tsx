import Link from "next/link";

const navLinks = [
  { href: "/buscar", label: "Buscar piso" },
  { href: "/publicar", label: "Publicar habitación" },
  { href: "/como-funciona", label: "Cómo funciona" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          FlatMatch
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/iniciar-sesion"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/registrarse"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Registrarse
          </Link>
        </div>
      </nav>
    </header>
  );
}