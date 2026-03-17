export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 FlatMatch. Todos los derechos reservados.</p>

        <div className="flex gap-6">
          <a href="#" className="transition hover:text-slate-900">
            Privacidad
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Términos
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}