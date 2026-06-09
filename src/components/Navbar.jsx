import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [conseilDropdownOpen, setConseilDropdownOpen] = useState(false);

  const handleMobileClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center space-x-4">
            <div className="shrink-0 w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 p-1">
              <img
                src="/blason.webp"
                alt="Blason"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-800 block tracking-tight">
                Votre commune
              </span>
              <span className="text-xs text-emerald-600 block uppercase tracking-wider font-bold">
                Mairie & Services
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-emerald-600 font-medium text-sm focus:outline-hidden focus:text-emerald-600"
            >
              Accueil
            </Link>
            <Link
              to="/#actualites"
              className="text-slate-700 hover:text-emerald-600 font-medium text-sm focus:outline-hidden focus:text-emerald-600"
            >
              Actualités
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setDropdownOpen(false);
                }
              }}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className="flex items-center space-x-1 text-slate-700 hover:text-emerald-600 font-medium text-sm h-full cursor-pointer focus:outline-hidden focus:text-emerald-600"
              >
                <span>Services & Démarches</span>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-0 w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    to="/etat-civil"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium focus:outline-hidden focus:bg-slate-50 focus:text-emerald-600"
                  >
                    📝 État Civil
                  </Link>
                  <Link
                    to="/urbanisme"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium focus:outline-hidden focus:bg-slate-50 focus:text-emerald-600"
                  >
                    🏗️ Urbanisme
                  </Link>
                  <Link
                    to="/dechetsTri"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium focus:outline-hidden focus:bg-slate-50 focus:text-emerald-600"
                  >
                    ♻️ Déchets
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setConseilDropdownOpen(true)}
              onMouseLeave={() => setConseilDropdownOpen(false)}
              onFocus={() => setConseilDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setConseilDropdownOpen(false);
                }
              }}
            >
              <button
                onClick={() => setConseilDropdownOpen(!conseilDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={conseilDropdownOpen}
                className="flex items-center space-x-1 text-slate-700 hover:text-emerald-600 font-medium text-sm h-full cursor-pointer focus:outline-hidden focus:text-emerald-600"
              >
                <span>Conseil Municipal</span>
              </button>
              {conseilDropdownOpen && (
                <div className="absolute left-0 mt-0 w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                  <Link
                    to="/equipe-municipale"
                    onClick={() => setConseilDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium focus:outline-hidden focus:bg-slate-50 focus:text-emerald-600"
                  >
                    👥 L'Équipe Municipale
                  </Link>
                  <Link
                    to="/comptes-rendus"
                    onClick={() => setConseilDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium focus:outline-hidden focus:bg-slate-50 focus:text-emerald-600"
                  >
                    📂 Comptes-rendus
                  </Link>
                  <Link
                    to="/procurations"
                    onClick={() => setConseilDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium border-t border-slate-50 focus:outline-hidden focus:bg-slate-50 focus:text-emerald-600"
                  >
                    🗳️ Procurations
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/#contact"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-500 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 cursor-pointer"
            aria-label="Ouvrir le menu de navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-inner">
          <Link
            to="/"
            onClick={handleMobileClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Accueil
          </Link>
          <Link
            to="/#actualites"
            onClick={handleMobileClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Actualités
          </Link>

          <div className="border-t border-slate-100 mt-2 pt-2">
            <span className="px-3 text-xs font-bold text-slate-400 uppercase">
              Services
            </span>
            <Link
              to="/etat-civil"
              onClick={handleMobileClick}
              className="block px-3 py-2 rounded-md text-base text-slate-700 hover:bg-slate-100"
            >
              📝 État Civil
            </Link>
            <Link
              to="/urbanisme"
              onClick={handleMobileClick}
              className="block px-3 py-2 rounded-md text-base text-slate-700 hover:bg-slate-100"
            >
              🏗️ Urbanisme
            </Link>
            <Link
              to="/dechetstri"
              onClick={handleMobileClick}
              className="block px-3 py-2 rounded-md text-base text-slate-700 hover:bg-slate-100"
            >
              ♻️ Déchets
            </Link>
          </div>

          <div className="border-t border-slate-100 mt-2 pt-2">
            <span className="px-3 text-xs font-bold text-slate-400 uppercase">
              Conseil Municipal
            </span>
            <Link
              to="/equipe-municipale"
              onClick={handleMobileClick}
              className="block px-3 py-2 rounded-md text-base text-slate-700 hover:bg-slate-100"
            >
              👥 L'Équipe Municipale
            </Link>
            <Link
              to="/comptes-rendus"
              onClick={handleMobileClick}
              className="block px-3 py-2 rounded-md text-base text-slate-700 hover:bg-slate-100"
            >
              📂 Comptes-rendus
            </Link>
            <Link
              to="/procurations"
              onClick={handleMobileClick}
              className="block px-3 py-2 rounded-md text-base text-slate-700 hover:bg-slate-100"
            >
              🗳️ Procurations
            </Link>
          </div>

          <Link
            to="/#contact"
            onClick={handleMobileClick}
            className="block text-center mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Nous contacter
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
