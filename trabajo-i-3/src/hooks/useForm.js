import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialValue = {}) => {
  const navigate = useNavigate();
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
      },
      credentials: "include",
    });
    const data = await res.json();
    navigate("/login")
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
