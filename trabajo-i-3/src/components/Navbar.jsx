import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProfile } from "../hooks/useProfile";
export const Navbar = () => {
  const {getProfile} = useProfile();
  const { Logout } = useForm();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const checkProfile = async () => {
      try {
        const profile = await getProfile();
        setIsLogged(!!profile); //convierte el valor de islogged al valor del perfil, si el fetch da error o es incorrecto tomará falso, y diceversa
      } catch (error) {
        console.log(error);
        setIsLogged(false);
      }
    };
    checkProfile();
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <Link
            className="text-white text-xl font-bold hover:text-blue-200 transition-colors duration-200"
            to="/"
          >
            Mi Api con React
          </Link>

          {/* Mobile menu button */}
          {<div className="block lg:hidden">
            <button className="navbar-toggler text-white hover:text-blue-200 p-2 rounded-md transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>}

          {/* Navigation Menu */}
        
          
          {(isLogged) && (<div className="hidden lg:flex items-center space-x-4">
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                  to="/tasks"
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={Logout}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>)}


        </div>

        {/* Mobile Menu (hidden by default) */}
        <div className="lg:hidden hidden" id="navbarNav">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 rounded-b-lg">
            <Link
              className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
              to="/home"
            >
              Home
            </Link>
            <button
              onClick={Logout}
              className="w-full text-left text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
