import { Loading } from "../components/Loading";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
export const Register = () => {
  const [isloading, setLoading] = useState(false);
  const { values, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    lastname: "",
    firstname: "",
    dni: "",
  });
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const fetchBody = {
        username: values.username,
        email: values.email,
        password: values.password,
        lastname: values.lastname,
        name: values.firstname,
      };
      const fetcData = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          headers: { "Content-Type": "application/json" },
        },
        body: JSON.stringify(fetchBody),
      });
      const response = await fetcData.json();
      setLoading(false)
      if (!response.ok) {
        console.log(response.errors);
        setMessage("campos invalidos");
      }
      if (response.ok){
        setMessage(response.message, " inicie sesion")
      }
      handleReset();
    } catch (error) {
      setLoading(false)
      setMessage("error de conexion")
      console.log(error);
    }
  };

  return (
    ( isloading ? <Loading/> : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        id="form-login"
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
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
            onChange={handleChange}
            value={values.username}
            type="text"
            name="username"
            id="username"
            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            value={values.email}
            required
            type="email"
            name="email"
            id="email"
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
            onChange={handleChange}
            value={values.password}
            name="password"
            type="password"
            id="password"
            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Firstname
          </label>
          <input
            required
            onChange={handleChange}
            value={values.firstname}
            type="text"
            name="firstname"
            id="firstname"
            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Lastname
          </label>
          <input
            required
            onChange={handleChange}
            value={values.lastname}
            type="text"
            name="lastname"
            id="lastname"
            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>

        <span className="text-red-500 text-sm mt-2 block">{message}</span>
        <button onClick={submit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outlinea_none focus:shadow-outline w-full">
          Login
        </button>
        <br />
        <p>
          ya tienes una cuenta?
          <a href="/login"> Inicia sesion</a>
        </p>
      </form>
    </div>))
  );
};
