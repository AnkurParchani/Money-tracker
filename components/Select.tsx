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
    <>
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
    </>
  );
};

export default Select;
