import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleReset = () => {
    setValues(initialValue);
  };
  const Logout = async () => {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      headers: {
        headers: { "Content-Type": "application/json" },
      }
    });
    const data = await res.json();
    return data;
  };

  return {
    Logout,
    values,
    setValues,
    handleChange,
    handleReset,
  };
};
