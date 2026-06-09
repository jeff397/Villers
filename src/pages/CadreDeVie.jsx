import { useState } from "react";
import * as Icons from "lucide-react";
import { HelpCircle, ChevronDown, ChevronUp, Leaf } from "lucide-react";
import reglementsVoisinageData from "../data/reglementsVoisinage.json";

function CadreDeVie() {
  const reglementsVoisinage = reglementsVoisinageData.reglements || [];

  const [sectionOuverte, setSectionOuverte] = useState(null);

  const toggleSection = (id) => {
    setSectionOuverte(sectionOuverte === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <Leaf className="w-8 h-8 text-emerald-600" />
          Cadre de Vie & Bon Voisinage
        </h1>
        <p className="text-slate-600 mt-2">
          Réglementations, civisme et conseils pratiques pour préserver la
          qualité de vie et le bien-être à Villers-sur-Authie.
        </p>
      </div>

      <div className="bg-slate-100/80 border border-slate-200/60 p-5 rounded-2xl mb-8 flex items-start gap-4 text-sm text-slate-700 leading-relaxed">
        <HelpCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
        <p>
          Le respect des règles de civilité et des arrêtés municipaux permet à
          chacun de vivre en harmonie dans notre village. Cliquez sur une
          thématique ci-dessous pour consulter le détail des préconisations.
        </p>
      </div>

      {reglementsVoisinage.length > 0 ? (
        <div className="space-y-4">
          {reglementsVoisinage.map((item, index) => {
            const itemKey = item.id || `voisinage-${index}`;
            const isOpen = sectionOuverte === itemKey;

            const IconeComposant = Icons[item.icone] || HelpCircle;

            return (
              <div
                key={itemKey}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-emerald-500 shadow-md"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleSection(itemKey)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-emerald-600">
                      <IconeComposant className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {item.titre}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {item.resume}
                      </p>
                    </div>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/40 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.paragraphs && item.paragraphs.length > 0 ? (
                      item.paragraphs.map((paragraphe, idx) => (
                        <p key={idx} className="whitespace-pre-line">
                          {paragraphe}
                        </p>
                      ))
                    ) : (
                      <p>{item.resume}</p>
                    )}

                    {item.important && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-3 text-amber-900 text-xs rounded-r-xl mt-2">
                        <strong>Attention :</strong> {item.important}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">
            Aucune fiche réglementaire n'est disponible pour le moment.
          </p>
        </div>
      )}
    </div>
  );
}

export default CadreDeVie;
