import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type RegisterFormLayoutProps = {
  backHref: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  children: ReactNode;
};

export default function RegisterFormLayout({
  backHref,
  badge,
  title,
  description,
  buttonText,
  icon: Icon,
  children,
}: RegisterFormLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href={backHref}
        className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
      >
        ← Volver a tipos de cuenta
      </Link>

      <div className="mt-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          <Icon size={28} />
        </div>

        <span className="mt-6 inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
          {badge}
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">{description}</p>

        <form className="mt-8 space-y-5">
          {children}

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}