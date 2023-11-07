import { ChangeEvent, useState } from "react";

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue("");
  };

  return {
    value,
    setValue,
    handleChange,
    clear,
  };
}

export default useInput;
