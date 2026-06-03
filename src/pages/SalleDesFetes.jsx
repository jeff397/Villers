import { Users, Euro, FileCheck, Info, CalendarCheck } from "lucide-react";
import dataSalle from "../data/salleDesFetes.json";

export default function SalleDesFetes() {
  const { capacite, tarifs, conditions } = dataSalle;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* EN-TÊTE */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Vie locale & Événements
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
          Location de la Salle des Fêtes
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          La commune de Villers-sur-Authie propose sa salle aux habitants ainsi
          qu'aux personnes extérieures pour l'organisation de vos événements.
        </p>
      </div>

      {/* INFOS CAPACITÉ */}
      <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-6">
        <div className="p-4 bg-purple-600 text-white rounded-xl shrink-0">
          <Users size={32} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Capacité d'accueil
          </h3>
          <p className="text-slate-600 text-sm mt-1">{capacite.description}</p>
          <div className="flex gap-6 mt-3 text-sm font-semibold text-purple-900">
            <p>• {capacite.assise} places assises</p>
            <p>• {capacite.debout} places debout max.</p>
          </div>
        </div>
      </div>

      {/* GRILLE DES TARIFS */}
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Euro size={22} className="text-purple-600" /> Tarifs de location
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Habitants de la commune */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Habitants de Villers-sur-Authie
            </h4>
            <p className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-2">
              Tarif préférentiel
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between border-b border-slate-50 pb-2 text-sm">
                <span className="text-slate-500">Le week-end (2 jours)</span>
                <span className="font-bold text-slate-800">
                  {tarifs.habitantsCommune.weekEnd}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">La journée en semaine</span>
                <span className="font-bold text-slate-800">
                  {tarifs.habitantsCommune.journee}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Personnes extérieures */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Personnes extérieures
            </h4>
            <p className="text-xs text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded w-fit mt-2">
              Hors commune
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between border-b border-slate-50 pb-2 text-sm">
                <span className="text-slate-500">Le week-end (2 jours)</span>
                <span className="font-bold text-slate-800">
                  {tarifs.exterieurs.weekEnd}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">La journée en semaine</span>
                <span className="font-bold text-slate-800">
                  {tarifs.exterieurs.journee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMATIONS COMPLÉMENTAIRES & DOSSIER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
            <FileCheck size={18} className="text-purple-600" /> Pièces à fournir
            pour la réservation
          </h4>
          <ul className="text-sm text-slate-600 space-y-2 pl-2">
            {conditions.documentsRequis.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-purple-600 mt-0.5">•</span> {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 text-sm text-slate-600">
          <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
            <Info size={18} className="text-purple-600" /> Informations
          </h4>
          <p>
            <span className="font-semibold">Caution :</span>{" "}
            {conditions.caution}
          </p>
          <p>
            <span className="font-semibold">Arrhes :</span> {conditions.acompte}
          </p>
          <p className="text-xs text-slate-500 italic mt-2">
            {tarifs.options.chauffageElectricite}
          </p>
        </div>
      </div>

      {/* APPORT ACTION RESA */}
      <div className="mt-10 text-center">
        <p className="text-sm text-slate-500 mb-3">
          Pour vérifier les disponibilités ou pré-réserver la salle :
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition shadow-sm shadow-purple-900/20"
        >
          <CalendarCheck size={16} /> Contacter le secrétariat de mairie
        </a>
      </div>
    </div>
  );
}
