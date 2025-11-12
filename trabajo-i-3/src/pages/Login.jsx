import { useState } from "react";
import { useForm } from "../hooks/useForm";
export const Login = () => {
  const [message, setMessage] = useState("");

  const { values, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const Submit = async (e) => {
    e.preventDefault();
    try {
      const bodyfetch = {
        username: values.username,
        password: values.password,
      };
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyfetch),
      });
      const res = await response.json();
      if (!res.ok) {
        setMessage(res.message);
      }
      handleReset();
    } catch (error) {
      console.log("error en el fetch: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        id="form-login"
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            required
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={values.username}
            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>
        <span className="text-red-500 text-sm mt-2 block">{message}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outlinea_none focus:shadow-outline w-full"
          onClick={Submit}
        >
          Login
        </button><br />
        <p>
          no estas registrado?
          <a href="/register"> Registrate</a>
        </p>
      </form>
    </div>
  );
};
