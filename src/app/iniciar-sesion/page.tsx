import Link from "next/link";
import RegisterInput from "@/components/register/RegisterInput";

export default function IniciarSesionPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 md:p-10">
        <div className="mb-8">
          <p className="text-sm font-medium text-indigo-600">Acceso</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Inicia sesión en tu cuenta
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Accede a tu perfil para gestionar tus búsquedas, favoritos y anuncios.
          </p>
        </div>

        <form className="space-y-5">
          <RegisterInput
            label="Correo electrónico"
            type="email"
            placeholder="tuemail@ejemplo.com"
          />

          <RegisterInput
            label="Contraseña"
            type="password"
            placeholder="Introduce tu contraseña"
          />

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              Recordarme
            </label>

            <Link
              href="#"
              className="font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-sm text-slate-400">o</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid gap-3">
          <button
            type="button"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Continuar con Google
          </button>

          <button
            type="button"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Continuar con Apple
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          ¿Todavía no tienes cuenta?{" "}
          <Link
            href="/registrarse"
            className="font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}