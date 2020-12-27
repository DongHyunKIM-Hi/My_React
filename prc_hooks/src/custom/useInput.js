import { useState } from "react";

function useInput(initialform) {
  const [form, setForm] = useState(initialform);
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const reset = () => {
    setForm(initialform);
  };
  return [form, onChange, reset];
}

export default useInput;
