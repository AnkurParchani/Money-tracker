type InputType = {
  label?: string;
  id: string;
  type: string;
  name: string;
  labelClassname?: string;
  inputClassname?: string;
};

const Input = ({
  label,
  id,
  name,
  type,
  labelClassname,
  inputClassname,
}: InputType) => {
  return (
    <div className="flex flex-col gap-3">
      {label ? (
        <>
          <label className={labelClassname} htmlFor={id}>
            {label}
          </label>
          <input className={inputClassname} type={type} name={name} id={id} />
        </>
      ) : (
        <>
          <input className={inputClassname} type={type} name={name} id={id} />
        </>
      )}
    </div>
  );
};

export default Input;
