import { Calendar, ArrowRight, Megaphone } from "lucide-react";

function Actualites() {
  // Liste fictive des dernières actus du village
  const articles = [
    {
      id: 1,
      title: "Réfection de la voirie : Rue de la Mairie",
      category: "Travaux",
      date: "25 Mai 2026",
      desc: "Des travaux de bitumage vont débuter la semaine prochaine. Une déviation sera mise en place, merci de votre compréhension.",
      image:
        "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=600&q=80",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: 2,
      title: "Grande Brocante Annuelle du Comité des Fêtes",
      category: "Événement",
      date: "07 Juin 2026",
      desc: "Inscriptions ouvertes pour la brocante de Villers ! Venez nombreux chiner et profiter de la restauration sur place.",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      id: 3,
      title: "Compte-rendu du Conseil Municipal",
      category: "Vie Locale",
      date: "12 Mai 2026",
      desc: "Le procès-verbal de la dernière séance du conseil est disponible en ligne et consultable sur le panneau d'affichage.",
      image:
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
  ];

  return (
    <section className="py-16 bg-white" id="actualites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LA MODIFICATION EST ICI : text-center et mx-auto pour tout aligner au milieu */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Actualités & Événements
          </h2>
          <p className="mt-3 text-slate-600">
            Suivez la vie de notre commune au fil des jours. Retrouvez les
            arrêtés, festivités et projets en cours.
          </p>
        </div>

        {/* FLASH INFO / ALERTE DE DERNIÈRE MINUTE */}
        <div className="mb-10 bg-linear-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-4 sm:p-5 flex items-start space-x-4 shadow-xs">
          <div className="shrink-0 w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-red-900/10">
            <Megaphone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-md border border-red-200">
              Alerte Vigilance
            </span>
            <p className="mt-1.5 text-sm sm:text-base font-semibold text-slate-900">
              Coupure d'eau programmée le mardi 2 juin de 8h à 12h sur
              l'ensemble de la Grande Rue pour maintenance du réseau.
            </p>
          </div>
        </div>

        {/* GRILLE DES ARTICLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* Image de l'article avec effet zoom au survol */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-200">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col grow">
                {/* Métadonnées (Badge Catégorie + Date) */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border ${art.badgeColor}`}
                  >
                    {art.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {art.date}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-600 transition-colors mb-2">
                  {art.title}
                </h3>

                {/* Description courte */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {art.desc}
                </p>

                {/* Lien/Bouton "Lire la suite" poussé vers le bas */}
                <div className="mt-auto pt-2">
                  <a
                    href={`#actu-${art.id}`}
                    className="inline-flex items-center text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Actualites;
