import data from "../data/vieSolidaire.json";

function VieSolidaire() {
  const annee = "2026";
  const d = data[annee];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">
        La Vie Solidaire à Villers
      </h1>
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-10 shadow-sm">
        <p className="text-slate-700 leading-relaxed italic">
          "La force de notre village réside dans les liens qui nous unissent, de
          nos plus jeunes concitoyens à nos aînés. À travers ces différentes
          initiatives, la municipalité a à cœur de témoigner sa solidarité et de
          soutenir le bien-vivre à Villers-sur-Authie. Ces chiffres reflètent
          notre engagement quotidien auprès de chaque génération, pour faire de
          notre commune un lieu d'entraide et de partage."
        </p>
      </div>

      {/* Section Jeunesse */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-emerald-700 mb-4">
          Pour nos jeunes
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <CardStat
            chiffre={d.jeunesse.entree6eme.nombre}
            label="Entrées en 6ème"
          />
          <CardStat
            chiffre={d.jeunesse.diplomes.nombre}
            label="Diplômés fêtés"
          />
          <CardStat
            chiffre={d.jeunesse.noel.nombreJouets}
            label="Jouets de Noël"
          />
        </div>
      </section>

      {/* Section Aînés */}
      <section>
        <h2 className="text-xl font-bold text-emerald-700 mb-4">
          Pour nos aînés
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <CardStat
            chiffre={d.aines.plusDe65ans.totalPersonnes}
            label="Colis (65 ans et +)"
          />
          <CardStat
            chiffre={d.aines.de60a64ans.totalPersonnes}
            label="Colis (60-64 ans)"
          />
        </div>
      </section>
    </div>
  );
}

function CardStat({ chiffre, label }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm text-center">
      <div className="text-3xl font-black text-emerald-600 mb-1">{chiffre}</div>
      <div className="text-sm text-slate-600 font-medium">{label}</div>
    </div>
  );
}

export default VieSolidaire;
