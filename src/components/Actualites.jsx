import { useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";

const getBadgeColor = (category) => {
  switch (category) {
    case "Travaux":
      return "bg-amber-100 text-amber-950 border-amber-300";
    case "Événement":
      return "bg-emerald-100 text-emerald-950 border-emerald-300";
    case "Vie Locale":
    default:
      return "bg-blue-100 text-blue-950 border-blue-300";
  }
};

function Actualites() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fichiersJson = import.meta.glob("/src/data/actualites/*.json", {
    eager: true,
  });

  const articles = Object.values(fichiersJson)
    .map((fichier) => fichier.default || fichier)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="py-16 bg-white" id="actualites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Actualités & Événements
          </h2>
          <p className="mt-3 text-slate-600">
            Suivez la vie de notre commune au fil des jours. Retrouvez les
            arrêtés, festivités et projets en cours.
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="text-center text-slate-700 font-medium">
            Aucune actualité pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, index) => (
              <article
                key={art.id || index}
                className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-slate-200">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border ${getBadgeColor(art.category)}`}
                    >
                      {art.category}
                    </span>

                    <div className="flex items-center text-xs text-slate-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-600" />
                      {new Date(art.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-700 transition-colors mb-2">
                    {art.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {art.desc}
                  </p>

                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer underline decoration-emerald-500/30 hover:decoration-emerald-700"
                    >
                      Lire la suite
                      <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col scale-100 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 w-full shrink-0 bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-slate-950/80 hover:bg-slate-950 text-white p-2 rounded-full transition-colors cursor-pointer"
                title="Fermer la fenêtre"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="flex items-center gap-4 text-sm text-slate-700 mb-4">
                <span
                  className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border ${getBadgeColor(selectedArticle.category)}`}
                >
                  {selectedArticle.category}
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Calendar className="w-4 h-4 text-slate-600" />
                  {new Date(selectedArticle.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {selectedArticle.body
                  ? selectedArticle.body
                  : selectedArticle.desc}
              </p>
            </div>

            <div className="border-t border-slate-100 p-4 flex justify-end bg-slate-50 shrink-0">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Actualites;
