function Procurations() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-12">
      <h1 className="text-3xl font-extrabold text-slate-950 mb-6">
        🗳️ Faire une procuration
      </h1>
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-600 mb-6">
          Vous êtes absent lors d'un scrutin ? Vous pouvez confier votre vote à
          un autre électeur de votre choix en effectuant une procuration.
        </p>
        <a
          href="https://www.maprocuration.gouv.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
        >
          Accéder à MaProcuration.gouv.fr
        </a>
      </div>
    </div>
  );
}
export default Procurations;
