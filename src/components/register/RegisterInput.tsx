type RegisterInputProps = {
  label: string;
  type?: string;
  placeholder: string;
};

export default function RegisterInput({
  label,
  type = "text",
  placeholder,
}: RegisterInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}