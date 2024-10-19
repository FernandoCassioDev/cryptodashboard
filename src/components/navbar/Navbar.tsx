import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-min-bg h-16 font-grotesk flex justify-center items-center text-indigo-100 border-b">
      <div className="container justify-between flex flex-row">
        <div className="flex hover:text-white items-center">
          <img
            src="./src/assets/bcio.svg"
            alt="Icone Blockchain"
            className="max-w-8"
          />
          <h1 className="text-2xl font-semibold">Crypto Insights</h1>
        </div>

        {/* Ícone menu de hamburguer */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            {/* Ícone de fechar "X" */}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Links de navegação da sidebar */}

          <div className="mt-16 flex flex-col space-y-4 text-white">
            <a href="" className="block px-4 py-2 hover:bg-gray-700">
              Dashboard
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-700">
              Markets
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-700">
              Assets
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-700">
              News
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-700">
              Community
            </a>
          </div>
        </div>

        {/* Overlay para fehcar o menu quando clicar fora dele */}
        {isOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black opacity-50 md:hidden"
          ></div>
        )}

        {/* Links mostrados apenas em telas maiores */}
        <div className="gap-10 hidden md:flex items-center">
          <a href="" className="hover:text-white">
            Dashboard
          </a>
          <a href="" className="hover:text-white">
            Markets
          </a>
          <a href="" className="hover:text-white">
            Assets
          </a>
          <a href="" className="hover:text-white">
            News
          </a>
          <a href="" className="hover:text-white">
            Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
