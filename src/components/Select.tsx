import { ChangeEventHandler } from "react";
import { useAppColor } from "@/contexts/AppColorContext";

const Select = ({
  options,
  name,
  selectClassname,
  label,
  onChange,
  defaultValue,
  noBorder,
}: {
  options: string[];
  name: string;
  selectClassname?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  label?: string;
  defaultValue?: string;
  noBorder?: boolean;
}) => {
  const { appColor } = useAppColor(); // Get dynamic theme color

  return (
    <div
      className={`flex gap-1.5 outline-none px-2 py-1 ${
        noBorder ? "" : "border-2"
      } rounded-sm text-${appColor}-400 focus:outline-gray-400`}
    >
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
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