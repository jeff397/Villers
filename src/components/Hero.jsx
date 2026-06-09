import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-35 bg-[url('/mairie.jpg')] bg-cover bg-center"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="text-emerald-400 uppercase tracking-widest text-xs font-bold block mb-3 bg-emerald-950/50 w-fit mx-auto px-3 py-1 rounded-full border border-emerald-800/30">
          Votre commune — Département
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Bienvenue à{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-emerald-400 to-cyan-300">
            Votre commune
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Votre village au quotidien. Suivez la vie locale, découvrez les
          projets de la commune et réalisez vos démarches administratives en
          toute simplicité.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/vie-de-la-commune"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-emerald-900/20 transition-all text-center"
          >
            La vie de notre commune
          </Link>
          <Link
            to="/vie-solidaire"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-emerald-900/20 transition-all text-center"
          >
            Vie solidaire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
