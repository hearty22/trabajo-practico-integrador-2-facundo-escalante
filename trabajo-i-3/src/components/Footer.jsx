export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
               Mi proyecto con React. Todos los derechos reservados .
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a 
              href="/privacy" 
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Política de Privacidad
            </a>
            <a 
              href="/terms" 
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Términos de Servicio
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};