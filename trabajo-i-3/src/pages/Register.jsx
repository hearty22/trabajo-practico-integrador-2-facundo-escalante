    import React from 'react'
    
    export const Register = () => {
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

            className="shadow appearancea_none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outlinea_none focus:shadow-outline"
          />
        </div>
        <span className="text-red-500 text-sm mt-2 block"></span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outlinea_none focus:shadow-outline w-full"

        >
          Login
        </button><br />
        <p>
          ya tienes una cuenta?
          <a href="/login"> Inicia sesion</a>
        </p>
      </form>
    </div>
      )
    }
    