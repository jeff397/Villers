import { useState } from "react";
import data from "../data/vieCommune.json";

function VieCommune() {
  const annees = Object.keys(data).sort((a, b) => b - a);
  const [annee, setAnnee] = useState(annees[0]);
  const currentData = data[annee];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">La vie de notre commune</h1>

      {/* Sélecteur d'année */}
      <div className="flex gap-2 mb-8">
        {annees.map((y) => (
          <button
            key={y}
            onClick={() => setAnnee(y)}
            className={`px-4 py-2 rounded ${annee === y ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Grille de sections */}
      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Naissances" items={currentData.naissances} />
        <Section title="Mariages" items={currentData.mariages} />
        <Section title="PACS" items={currentData.pacs} />
        <Section title="Décès" items={currentData.deces} />
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="p-4 border border-slate-200 rounded-xl shadow-sm bg-white">
      <h2 className="font-bold text-slate-800 mb-3 border-b pb-1">{title}</h2>
      {items.length > 0 ? (
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-slate-700">
              {/* Logique pour Naissances/Décès */}
              {item.nom && `${item.prenom} ${item.nom}`}

              {/* Logique pour Mariages/PACS */}
              {item.nom1 && (
                <span>
                  {item.prenom1} {item.nom1} & {item.prenom2} {item.nom2}
                </span>
              )}

              <span className="text-slate-400 text-xs ml-2">({item.date})</span>
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
