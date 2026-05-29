function Hero() {
  return (
    <div className="relative bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Image de fond avec une opacité un peu plus chaleureuse */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Petite étiquette verte/nature */}
        <span className="text-emerald-400 uppercase tracking-widest text-xs font-bold block mb-3 bg-emerald-950/50 w-fit mx-auto px-3 py-1 rounded-full border border-emerald-800/30">
          Vallée de l'Authie — Somme
        </span>

        {/* Titre avec un dégradé chaleureux Ambre -> Émeraude */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Bienvenue à{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-emerald-400 to-cyan-300">
            Villers-sur-Authie
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Votre village au quotidien. Suivez la vie locale, découvrez les
          projets de la commune et réalisez vos démarches administratives en
          toute simplicité.
        </p>

        {/* Bouton principal Vert Émeraude (plus chaleureux que le bleu) */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#demarches"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-emerald-900/20 transition-all text-center"
          >
            Démarches en ligne
          </a>
          <a
            href="#actualites"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-xl backdrop-blur-sm border border-white/10 transition-all text-center"
          >
            Vie locale & Actualités
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
