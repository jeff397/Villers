import { Trash2, Recycle, MapPin, Clock, ExternalLink } from "lucide-react";
import infosDechets from "../data/dechets.json";

export default function DechetsTri() {
  const { collecte, dechetteries, lienIntercommunalite } = infosDechets;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Environnement & Cadre de vie
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
          Gestion des Déchets & Tri Sélectif
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Retrouvez les jours de collecte, les consignes de tri et les
          informations sur les déchetteries en partenariat avec la Communauté de
          Communes Ponthieu-Marquenterre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-green-50 text-green-600 rounded-xl">
                <Trash2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Le Calendrier de Ramassage
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Ordures ménagères
                </p>
                <p className="text-lg font-semibold text-slate-800 mt-0.5">
                  {collecte.orduresMenageres}
                </p>
              </div>

              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1">
                  <Recycle size={12} /> Tri sélectif
                </p>
                <p className="text-lg font-semibold text-slate-800 mt-0.5">
                  {collecte.triSelectif}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-500 mt-4 italic bg-slate-50 p-3 rounded-lg border-l-4 border-green-600">
              {collecte.consignes}
            </p>
          </div>

          <div className="bg-[#1E4620] text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-bold text-lg">
                Un doute sur le tri ou un bac cassé ?
              </h4>
              <p className="text-sm text-emerald-100 mt-1">
                La Communauté de Communes Ponthieu-Marquenterre gère directement
                la distribution des bacs et les rapports de collecte.
              </p>
            </div>
            <a
              href={lienIntercommunalite}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E4620] hover:bg-emerald-50 px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 shrink-0 transition"
            >
              Site de la CCPM <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Déchetteries</h3>
            </div>

            <div className="space-y-6">
              {dechetteries.map((dechetterie, idx) => (
                <div
                  key={idx}
                  className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                >
                  <h4 className="font-bold text-slate-800 text-base">
                    {dechetterie.nom}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-start gap-1">
                    <MapPin
                      size={12}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />
                    {dechetterie.adresse}
                  </p>

                  <div className="mt-3 text-xs text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-lg">
                    {dechetterie.horairesEte && (
                      <p className="flex items-center gap-1">
                        <Clock size={12} className="text-green-600" />{" "}
                        <span className="font-medium">Été :</span>{" "}
                        {dechetterie.horairesEte}
                      </p>
                    )}
                    {dechetterie.horairesHiver && (
                      <p className="flex items-center gap-1">
                        <Clock size={12} className="text-blue-600" />{" "}
                        <span className="font-medium">Hiver :</span>{" "}
                        {dechetterie.horairesHiver}
                      </p>
                    )}
                    {dechetterie.horaires && (
                      <p className="flex items-center gap-1 text-slate-500 italic">
                        {dechetterie.horaires}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
