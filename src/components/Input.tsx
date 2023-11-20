type InputType = {
  label?: string;
  id: string;
  type: string;
  name: string;
  labelClassname?: string;
  inputClassname?: string;
  defaultValue?: string | number;
  placeholder?: string;
  authInput?: boolean;
};

const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  labelClassname,
  authInput,
  inputClassname,
  defaultValue,
}: InputType) => {
  let inputClass;
  if (authInput)
    inputClass =
      "text-black border-2 px-2 py-1 rounded-sm  focus:outline-gray-400";
  else inputClass = inputClassname;

  return (
    <div className="flex flex-col gap-3">
      {label ? (
        <>
          <label className={labelClassname} htmlFor={id}>
            {label}
          </label>
          <input
            defaultValue={defaultValue}
            className={inputClass}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        </>
      ) : (
        <>
          <input
            defaultValue={defaultValue}
            className={inputClass}
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
          />
        </>
      )}
    </div>
  );
};

export default Input;
