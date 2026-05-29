import { useState } from "react";

function Navbar() {
  // État pour le menu mobile (burger)
  const [isOpen, setIsOpen] = useState(false);
  // État pour le sous-menu déroulant "Vie Locale" sur ordinateur
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* À GAUCHE : Le Blason et le Nom */}
          <div className="flex items-center space-x-4">
            <div className="shrink-0 flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 p-1 overflow-hidden">
              <img
                src="/blason.webp"
                alt="Blason de Villers-sur-Authie"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-800 block tracking-tight">
                Villers-sur-Authie
              </span>
              <span className="text-xs text-emerald-600 block uppercase tracking-wider font-bold">
                Mairie & Services
              </span>
            </div>
          </div>

          {/* AU CENTRE / À DROITE : Menu Ordinateur */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#accueil"
              className="text-slate-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Accueil
            </a>
            <a
              href="#actualites"
              className="text-slate-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Actualités
            </a>
            <a
              href="#demarches"
              className="text-slate-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Démarches
            </a>

            {/* SOUS-MENU DÉROULANT : Vie Locale */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)} // Se ferme si on clique ailleurs
                className="flex items-center space-x-1 text-slate-700 hover:text-emerald-600 font-medium text-sm transition-colors focus:outline-none"
              >
                <span>Vie Locale</span>
                <svg
                  className={`h-4 w-4 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Contenu du Dropdown (Apparaît si dropdownOpen est vrai) */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <a
                    href="#associations"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium"
                  >
                    👥 Associations
                  </a>
                  <a
                    href="#professionnels"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium"
                  >
                    💼 Artisans & Professionnels
                  </a>
                  <a
                    href="#logements"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium"
                  >
                    🏡 Logements & Urbanisme
                  </a>
                </div>
              )}
            </div>

            <a
              href="#conseil"
              className="text-slate-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Conseil Municipal
            </a>
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-500 transition-colors shadow-sm"
            >
              Nous contacter
            </a>
          </div>

          {/* BOUTON BURGER (Pour les téléphones) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-emerald-600 hover:bg-slate-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-inner">
          <a
            href="#accueil"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
          >
            Accueil
          </a>
          <a
            href="#actualites"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
          >
            Actualités
          </a>
          <a
            href="#demarches"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
          >
            Démarches
          </a>

          {/* Liens directs sur Mobile pour éviter les sous-menus complexes au doigt */}
          <div className="bg-slate-100/60 rounded-xl my-2 p-1 border border-slate-200/50">
            <span className="block px-3 pt-1 pb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Vie Locale
            </span>
            <a
              href="#associations"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-emerald-600"
            >
              👥 Associations
            </a>
            <a
              href="#professionnels"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-emerald-600"
            >
              💼 Artisans & Professionnels
            </a>
            <a
              href="#logements"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-emerald-600"
            >
              🏡 Logements
            </a>
          </div>

          <a
            href="#conseil"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
          >
            Conseil Municipal
          </a>
          <a
            href="#contact"
            className="block text-center mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-emerald-500"
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
