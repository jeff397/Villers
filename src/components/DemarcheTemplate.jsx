import {
  ArrowLeft,
  FileCheck,
  Clock,
  ShieldAlert,
  ExternalLink,
} from "lucide-react";

function DemarcheTemplate({
  title,
  description,
  steps,
  pieces,
  delay,
  onlineLink,
  onBack,
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-emerald-600 mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </button>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            {description}
          </p>

          {delay && (
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-amber-800 bg-amber-50 border border-amber-200 w-fit px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Délai moyen constaté : {delay}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileCheck className="w-5 h-5 mr-2 text-emerald-600" />
                Pièces justificatives à fournir
              </h2>
              <ul className="space-y-3">
                {pieces.map((piece, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-slate-600 leading-relaxed"
                  >
                    <span className="text-emerald-500 mr-2.5 font-bold">✓</span>
                    {piece}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <ShieldAlert className="w-5 h-5 mr-2 text-blue-600" />
                Comment procéder ?
              </h2>
              <ol className="relative border-l border-slate-200 ml-3 space-y-6">
                {steps.map((step, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-900 text-white font-bold rounded-full -left-3 text-xs">
                      {index + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl sticky top-6 text-center">
              <h3 className="font-bold text-lg mb-2">Faire la démarche</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Gagnez du temps en effectuant votre pré-demande ou votre suivi
                directement en ligne.
              </p>

              {onlineLink ? (
                <a
                  href={onlineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-50 text-sm text-white hover:text-emerald-700 font-bold py-3 px-4 rounded-xl transition-all shadow-md group"
                >
                  Accéder au service en ligne
                  <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                </a>
              ) : (
                <div className="text-xs text-amber-400 bg-white/5 border border-white/10 rounded-xl p-3">
                  Cette démarche s'effectue uniquement sur rendez-vous en
                  mairie.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemarcheTemplate;
