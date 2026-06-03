import {
  Clock,
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  UserCheck,
} from "lucide-react";
import infosData from "../data/infosPratiques.json";

export default function InfosPratiques() {
  const { mairie, urgences } = infosData;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* EN-TÊTE */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Vie municipale
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
          Informations Pratiques
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Retrouvez les horaires d'ouverture du secrétariat de mairie, les
          coordonnées de vos contacts locaux et les numéros d'urgence
          indispensables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BLOC 1 : HORAIRES & PERMANENCES */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Horaires d'ouverture
            </h3>
          </div>

          <div className="space-y-3">
            {mairie.horaires.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm"
              >
                <span className="font-bold text-slate-700">{item.jour}</span>
                <span className="text-slate-600 font-medium">
                  {item.heures}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <UserCheck
                size={16}
                className="text-emerald-600 mt-0.5 shrink-0"
              />
              <div>
                <p className="font-semibold text-slate-800">
                  Permanence de Monsieur le Maire :
                </p>
                <p className="mt-1 text-xs leading-relaxed">
                  {mairie.permanenceMaire}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOC 2 : CONTACTS DE LA MAIRIE */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Coordonnées</h3>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition">
              <MapPin size={18} className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Adresse postale</p>
                <p className="mt-1 text-xs">{mairie.adresse}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition">
              <Phone size={18} className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Téléphone</p>
                <p className="mt-1 text-xs">
                  <a
                    href={`tel:${mairie.telephone}`}
                    className="hover:underline font-medium text-slate-700"
                  >
                    {mairie.telephone}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition">
              <Mail size={18} className="text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-800">Adresse E-mail</p>
                <p className="mt-1 text-xs truncate max-w-50 sm:max-w-none">
                  <a
                    href={`mailto:${mairie.email}`}
                    className="hover:underline font-medium text-slate-700"
                  >
                    {mairie.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOC 3 : NUMÉROS D'URGENCE */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-50 text-red-600 rounded-xl">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Numéros d'urgence
            </h3>
          </div>

          <div className="space-y-2.5">
            {urgences.map((urgence, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-2.5 bg-red-50/30 rounded-xl border border-red-100 text-xs"
              >
                <span className="font-medium text-slate-700">
                  {urgence.nom}
                </span>
                <span className="font-bold text-red-700 bg-white border border-red-200 px-2 py-0.5 rounded shadow-2xs">
                  {urgence.numero}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
