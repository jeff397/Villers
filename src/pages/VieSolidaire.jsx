import { useState } from "react";
import data from "../data/vieSolidaire.json";

function VieSolidaire() {
  const registre = data.registre || [];

  const annees = registre.map((item) => item.annee).sort((a, b) => b - a);

  const [anneeSelectionnee, setAnneeSelectionnee] = useState(annees[0] || "");

  const currentData = registre.find((item) => item.annee === anneeSelectionnee);

  const entree6eme = currentData?.jeunesse?.entree6eme_nombre ?? 0;
  const diplomes = currentData?.jeunesse?.diplomes_nombre ?? 0;
  const noelJouets = currentData?.jeunesse?.noel_nombreJouets ?? 0;

  const plus65ans = currentData?.aines?.plusDe65ans_total ?? 0;
  const de60a64ans = currentData?.aines?.de60a64ans_total ?? 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">
        La Vie Solidaire à Villers
      </h1>

      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-10 shadow-xs">
        <p className="text-slate-700 leading-relaxed italic">
          "La force de notre village réside dans les liens qui nous unissent, de
          nos plus jeunes concitoyens à nos aînés. À travers ces différentes
          initiatives, la municipalité a à cœur de témoigner sa solidarité et de
          soutenir le bien-vivre à Villers-sur-Authie. Ces chiffres reflètent
          notre engagement quotidien auprès de chaque génération, pour faire de
          notre commune un lieu d'entraide et de partage."
        </p>
      </div>

      {annees.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {annees.map((y) => (
            <button
              key={y}
              onClick={() => setAnneeSelectionnee(y)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
                anneeSelectionnee === y
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Bilan {y}
            </button>
          ))}
        </div>
      )}

      {currentData ? (
        <>
          <section className="mb-10">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">
              Pour nos jeunes
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <CardStat chiffre={entree6eme} label="Entrées en 6ème" />
              <CardStat chiffre={diplomes} label="Diplômés fêtés" />
              <CardStat chiffre={noelJouets} label="Jouets de Noël" />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-700 mb-4">
              Pour nos aînés
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <CardStat chiffre={plus65ans} label="Colis (65 ans et +)" />
              <CardStat chiffre={de60a64ans} label="Colis (60-64 ans)" />
            </div>
          </section>
        </>
      ) : (
        <p className="text-slate-400 italic text-center">
          Aucune statistique disponible.
        </p>
      )}
    </div>
  );
}

function CardStat({ chiffre, label }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs text-center hover:border-emerald-300 transition-colors">
      <div className="text-3xl font-black text-emerald-600 mb-1">{chiffre}</div>
      <div className="text-sm text-slate-600 font-medium">{label}</div>
    </div>
  );
}

export default VieSolidaire;
