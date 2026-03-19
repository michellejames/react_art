export default function Input({ label, invalid, ...props }) {
  //adding Tailwind classes based on a condition
  let labelClasses = "block mb-2 text-sm font-bold tracking-wide uppercase";
  let inputClasses =
    "w-full px-3 py-2 leading-tight border border-gray-300 rounded shadow appearance-none focus:outline-none focus:border-gray-500";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
