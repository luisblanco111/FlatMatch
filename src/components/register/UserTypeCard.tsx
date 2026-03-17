import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

type UserTypeCardProps = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export default function UserTypeCard({
  title,
  slug,
  description,
  icon: Icon,
  features,
}: UserTypeCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={28} />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">{title}</h2>

      <p className="mt-3 text-slate-600">{description}</p>

      <ul className="mt-6 space-y-3 text-sm text-slate-600">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/registrarse/${slug}`}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Continuar como {title}
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}