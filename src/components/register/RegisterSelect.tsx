type RegisterSelectProps = {
  label: string;
  options: string[];
};

export default function RegisterSelect({
  label,
  options,
}: RegisterSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}