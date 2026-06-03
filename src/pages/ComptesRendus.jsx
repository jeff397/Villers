import { FileText, Download } from "lucide-react";

function ComptesRendus() {
  const comptesRendus = [
    {
      titre: "Compte-rendu du Conseil Municipal - 14 Avril 2026",
      date: "14/04/2026",
      fichier: "#",
    },
    {
      titre: "Compte-rendu du Conseil Municipal - 12 Février 2026",
      date: "12/02/2026",
      fichier: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <FileText className="w-8 h-8 text-emerald-600" />
          Comptes-rendus des Conseils
        </h1>
        <p className="text-slate-600 mt-2">
          Consultez et téléchargez les procès-verbaux officiels des dernières
          délibérations municipales.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm divide-y">
        {comptesRendus.map((cr, index) => (
          <div
            key={index}
            className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-red-500" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {cr.titre}
                </h3>
                <p className="text-xs text-slate-400">Publié le {cr.date}</p>
              </div>
            </div>
            <a
              href={cr.fichier}
              download
              className="bg-slate-100 p-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComptesRendus;
