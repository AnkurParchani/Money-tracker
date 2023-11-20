const Select = ({
  options,
  name,
  selectClassname,
  label,
  defaultValue,
}: {
  options: string[];
  name: string;
  selectClassname?: string;
  label?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="flex gap-1.5 outline-none px-2 py-1 border-2 rounded-sm text-blue-400 focus:outline-gray-400">
      <label htmlFor={name}>{label}</label>
      <select
        defaultValue={defaultValue}
        name={name}
        id={name}
        className={selectClassname}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
