import { useState } from "react";
import data from "../data/vieCommune.json";

function VieCommune() {
  const registre = data.registre || [];
  const annees = registre.map((item) => item.annee).sort((a, b) => b - a);
  const [annee, setAnnee] = useState(annees[0] || "");
  const currentYearData = registre.find((item) => item.annee === annee);

  const naissancesCount = currentYearData?.naissances_count || 0;

  const mariages = currentYearData?.mariages || [];
  const pacs = currentYearData?.pacs || [];
  const deces = currentYearData?.deces || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">La vie de notre commune</h1>

      {annees.length > 0 ? (
        <div className="flex flex-wrap gap-2 mb-8">
          {annees.map((y) => (
            <button
              key={y}
              onClick={() => setAnnee(y)}
              className={`px-4 py-2 rounded font-semibold text-sm transition-colors cursor-pointer ${
                annee === y
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-slate-400 italic mb-8">Aucune année enregistrée.</p>
      )}

      {annee && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border border-slate-200 rounded-xl shadow-xs bg-white">
            <h2 className="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-1">
              Naissances
            </h2>
            {naissancesCount > 0 ? (
              <p className="text-sm text-slate-700 font-medium">
                Nous avons eu le plaisir d'accueillir{" "}
                <span className="text-emerald-600 font-bold text-base">
                  {naissancesCount}
                </span>{" "}
                {naissancesCount > 1 ? "nouveaux-nés" : "nouveau-né"} dans la
                commune en {annee}.
              </p>
            ) : (
              <p className="text-slate-400 text-sm italic">
                Aucune naissance enregistrée.
              </p>
            )}
          </div>

          <Section title="Mariages" items={mariages} />
          <Section title="PACS" items={pacs} />
          <Section title="Décès" items={deces} />
        </div>
      )}
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="p-4 border border-slate-200 rounded-xl shadow-xs bg-white">
      <h2 className="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-1">
        {title}
      </h2>
      {items.length > 0 ? (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-sm text-slate-700 flex items-center justify-between"
            >
              <div>
                {item.nom && (
                  <span className="font-medium">
                    {item.prenom} {item.nom}
                  </span>
                )}
                {item.nom1 && (
                  <span className="font-medium">
                    {item.prenom1} {item.nom1} & {item.prenom2} {item.nom2}
                  </span>
                )}
              </div>
              <span className="text-slate-400 text-xs shrink-0 ml-2">
                ({item.date})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-400 text-sm italic">
          Aucun événement enregistré.
        </p>
      )}
    </div>
  );
}

export default VieCommune;
