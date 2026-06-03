import { Phone, Mail, Globe, Users } from "lucide-react";
import listaGites from "../data/gites.json";
export default function Tourisme() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Où se loger à Villers-sur-Authie
      </h2>
      <p className="text-slate-600 mb-8">
        Découvrez l'offre touristique et les hébergements disponibles sur notre
        commune.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listaGites.map((gite) => (
          <div
            key={gite.id}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                {gite.type}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">
                {gite.nom}
              </h3>
              <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                <Users size={14} /> Capacité : {gite.capacite}
              </p>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {gite.description}
              </p>
            </div>

            {/* COORDONNÉES POUR LES RÉSERVATIONS */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-600" />
                <a href={`tel:${gite.telephone}`} className="hover:underline">
                  {gite.telephone}
                </a>
              </div>

              {gite.email && (
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-600" />
                  <a
                    href={`mailto:${gite.email}`}
                    className="hover:underline text-xs truncate"
                  >
                    {gite.email}
                  </a>
                </div>
              )}

              {gite.siteWeb && (
                <div className="flex items-center gap-2 pt-1">
                  <Globe size={16} className="text-emerald-600" />
                  <a
                    href={gite.siteWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-medium hover:underline"
                  >
                    Visiter le site internet
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
