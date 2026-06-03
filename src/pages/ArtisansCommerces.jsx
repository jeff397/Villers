import { useState } from "react";
import {
  Store,
  Phone,
  Mail,
  Globe,
  Search,
  MapPin,
  X,
  Info,
} from "lucide-react";
import listeCommerces from "../data/commerces.json";

function ArtisansCommerces() {
  const [categorieFiltre, setCategorieFiltre] = useState("Tous");
  const [recherche, setRecherche] = useState("");
  const [commerceSelectionne, setCommerceSelectionne] = useState(null);

  // Catégories uniques
  const categories = [
    "Tous",
    ...new Set(listeCommerces.map((c) => c.categorie)),
  ];

  // Filtrage
  const commercesFiltrés = listeCommerces.filter((comm) => {
    const correspondCategorie =
      categorieFiltre === "Tous" || comm.categorie === categorieFiltre;
    const correspondRecherche =
      comm.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      comm.description.toLowerCase().includes(recherche.toLowerCase()) ||
      comm.contactNom.toLowerCase().includes(recherche.toLowerCase());
    return correspondCategorie && correspondRecherche;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 relative">
      {/* En-tête */}
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <Store className="w-8 h-8 text-emerald-600" />
          Artisans & Commerces
        </h1>
        <p className="text-slate-600 mt-2">
          Soutenez l'économie locale ! Retrouvez les commerçants, artisans et
          professionnels de santé qui font vivre Villers-sur-Authie au
          quotidien.
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 bg-slate-100/60 p-4 rounded-2xl border border-slate-200/50">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setCategorieFiltre(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                categorieFiltre === cat
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher un professionnel..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Grille des commerces */}
      {commercesFiltrés.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercesFiltrés.map((comm, index) => (
            <div
              key={index}
              onClick={() => setCommerceSelectionne(comm)}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-500/40 transition-all duration-200 cursor-pointer group"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
                  {comm.categorie}
                </span>

                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
                  {comm.nom}
                </h2>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  Contact :{" "}
                  <span className="text-slate-700 font-semibold">
                    {comm.contactNom}
                  </span>
                </p>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {comm.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-2 pt-2 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                <Info className="w-4 h-4" /> Voir les horaires et contacts
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">
            Aucun professionnel ne correspond à vos critères.
          </p>
        </div>
      )}

      {/* Info bas de page */}
      <div className="mt-12 bg-emerald-50 rounded-2xl border border-emerald-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-emerald-950 text-base">
            Vous êtes artisan ou commerçant à Villers ?
          </h3>
          <p className="text-emerald-800 text-sm mt-1">
            Pour apparaître gratuitement sur cette page ou modifier vos
            informations, contactez le secrétariat de la mairie.
          </p>
        </div>
        <a
          href="/#contact"
          className="bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-500 transition-colors text-center shrink-0 shadow-xs"
        >
          Contacter la mairie
        </a>
      </div>

      {/* ==========================================
          MODALE DÉTAILLÉE DE L'ARTISAN
          ========================================== */}
      {commerceSelectionne && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
          onClick={() => setCommerceSelectionne(null)}
        >
          <div
            className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCommerceSelectionne(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
              {commerceSelectionne.categorie}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-1 pr-8">
              {commerceSelectionne.nom}
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Responsable :{" "}
              <strong className="text-slate-800 font-semibold">
                {commerceSelectionne.contactNom}
              </strong>
            </p>

            {/* Description détaillée */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Activité & Horaires
              </h3>
              <div className="text-sm text-slate-700 leading-relaxed text-justify space-y-4">
                {commerceSelectionne.paragraphs.map((paragraphe, idx) => (
                  <p key={idx}>{paragraphe}</p>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Informations Pratiques
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* ADRESSE PHYSIQUE */}
                {commerceSelectionne.adresse && (
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 text-sm text-slate-700 sm:col-span-2 bg-slate-50/50">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Adresse
                      </span>
                      <span className="font-medium">
                        {commerceSelectionne.adresse}
                      </span>
                    </div>
                  </div>
                )}

                {commerceSelectionne.telephone && (
                  <a
                    href={`tel:${commerceSelectionne.telephone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/30 text-sm text-slate-700 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Téléphone
                      </span>
                      <span className="font-medium">
                        {commerceSelectionne.telephone}
                      </span>
                    </div>
                  </a>
                )}

                {commerceSelectionne.email && (
                  <a
                    href={`mailto:${commerceSelectionne.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/30 text-sm text-slate-700 transition-colors group truncate"
                  >
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                    <div className="truncate">
                      <span className="text-xs text-slate-400 block">
                        Email
                      </span>
                      <span className="font-medium truncate block">
                        {commerceSelectionne.email}
                      </span>
                    </div>
                  </a>
                )}

                {commerceSelectionne.site && (
                  <a
                    href={commerceSelectionne.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/30 text-sm text-slate-700 transition-colors group sm:col-span-2"
                  >
                    <Globe className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Site internet
                      </span>
                      <span className="font-semibold text-emerald-600">
                        Consulter le site web →
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtisansCommerces;
