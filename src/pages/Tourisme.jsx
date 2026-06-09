import { Phone, Mail, Globe, Users, Home } from "lucide-react";
import listaGitesData from "../data/gites.json";

export default function Tourisme() {
  const listaGites = listaGitesData.gites || [];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 relative">
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <Home className="w-8 h-8 text-emerald-600" />
          Où se loger à Villers-sur-Authie
        </h1>
        <p className="text-slate-600 mt-2">
          Découvrez l'offre touristique, les gîtes et les chambres d'hôtes
          disponibles sur notre commune pour votre séjour au calme de la vallée.
        </p>
      </div>

      {listaGites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listaGites.map((gite, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-500/30 transition-all duration-200 group"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
                  {gite.type}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
                  {gite.nom}
                </h3>

                <p className="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1.5">
                  <Users size={14} className="text-slate-400" />
                  Capacité :{" "}
                  <span className="text-slate-700 font-semibold">
                    {gite.capacite}
                  </span>
                </p>

                {gite.image && (
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-slate-100">
                    <img
                      src={gite.image}
                      alt={gite.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {gite.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 text-sm text-slate-700">
                {gite.telephone && (
                  <div className="flex items-center gap-2.5">
                    <Phone
                      size={16}
                      className="text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0"
                    />
                    <a
                      href={`tel:${gite.telephone.replace(/\s/g, "")}`}
                      className="hover:text-emerald-600 hover:underline font-medium"
                    >
                      {gite.telephone}
                    </a>
                  </div>
                )}

                {gite.email && (
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail
                      size={16}
                      className="text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0"
                    />
                    <a
                      href={`mailto:${gite.email}`}
                      className="hover:text-emerald-600 hover:underline truncate"
                    >
                      {gite.email}
                    </a>
                  </div>
                )}

                {gite.siteWeb && (
                  <div className="flex items-center gap-2.5 pt-1">
                    <Globe size={16} className="text-emerald-600 shrink-0" />
                    <a
                      href={gite.siteWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold text-xs uppercase tracking-wider hover:underline"
                    >
                      Visiter le site internet →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">
            Aucun hébergement touristique n'est enregistré pour le moment.
          </p>
        </div>
      )}
    </div>
  );
}
