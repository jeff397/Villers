function Services() {
  // On prépare une liste de services avec des icônes temporaires (émojis)
  // Plus tard, on pourra utiliser des icônes plus pros comme Lucide-React
  const demarches = [
    {
      title: "État Civil",
      desc: "Cartes d'identité, passeports, actes de naissance...",
      icon: "📝",
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      title: "Urbanisme & Travaux",
      desc: "Plans du PLU, permis de construire, déclarations...",
      icon: "🏗️",
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      title: "Vie Scolaire",
      desc: "Cantine, inscriptions aux écoles, accueils de loisirs...",
      icon: "🎒",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "Déchets & Tri",
      desc: "Calendrier de collecte, accès déchetterie, consignes...",
      icon: "♻️",
      color: "bg-green-50 text-green-700 border-green-100",
    },
    {
      title: "Salle des Fêtes",
      desc: "Tarifs, disponibilités et réservation de la salle...",
      icon: "🏛️",
      color: "bg-purple-50 text-purple-700 border-purple-100",
    },
    {
      title: "Infos Pratiques",
      desc: "Horaires de la mairie, permanences des élus, contacts...",
      icon: "📞",
      color: "bg-slate-50 text-slate-700 border-slate-100",
    },
  ];

  return (
    <section className="py-16 bg-white" id="demarches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITRE DE LA SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 tracking-tight">
            Services & Démarches
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Accédez rapidement aux outils et informations administratives
            essentielles de la commune de Villers-sur-Authie.
          </p>
        </div>

        {/* LA GRILLE DES BOUTONS/CARTES */}
        {/* grid-cols-1 (1 colonne sur mobile), md:grid-cols-2 (2 sur tablette), lg:grid-cols-3 (3 sur PC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demarches.map((item, index) => (
            <a
              key={index}
              href={`#${item.title.toLowerCase().replace(/ /g, "-")}`}
              className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex items-start space-x-4 text-left"
            >
              {/* Le carré pour l'icône */}
              <div
                className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl border ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Le texte */}
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
