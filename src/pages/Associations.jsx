import { useState } from "react";
import { Users, Phone, Mail, Globe, Search, X, Info } from "lucide-react";
import listeAssociations from "../data/associations.json";

function Associations() {
  const [categorieFiltre, setCategorieFiltre] = useState("Tous");
  const [recherche, setRecherche] = useState("");

  // ÉTAT POUR LA MODALE : stocke l'association sélectionnée (null si fermée)
  const [assoSelectionnee, setAssoSelectionnee] = useState(null);

  // Récupérer les catégories uniques automatiquement
  const categories = [
    "Tous",
    ...new Set(listeAssociations.map((a) => a.categorie)),
  ];

  // Filtrer la liste
  const associationsFiltrées = listeAssociations.filter((asso) => {
    const correspondCategorie =
      categorieFiltre === "Tous" || asso.categorie === categorieFiltre;
    const correspondRecherche =
      asso.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      asso.description.toLowerCase().includes(recherche.toLowerCase());
    return correspondCategorie && correspondRecherche;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 relative">
      {/* En-tête de la page */}
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <Users className="w-8 h-8 text-emerald-600" />
          Vie Associative
        </h1>
        <p className="text-slate-600 mt-2">
          Découvrez la diversité et le dynamisme des associations de
          Villers-sur-Authie. Cliquez sur une carte pour en savoir plus !
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
            placeholder="Rechercher une association..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Grille des associations */}
      {associationsFiltrées.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {associationsFiltrées.map((asso, index) => (
            <div
              key={index}
              onClick={() => setAssoSelectionnee(asso)} // OUVERTURE DE LA MODALE AU CLIC
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-500/40 transition-all duration-200 cursor-pointer group"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
                  {asso.categorie}
                </span>

                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
                  {asso.nom}
                </h2>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  Président(e) :{" "}
                  <span className="text-slate-700 font-semibold">
                    {asso.president}
                  </span>
                </p>

                {/* Texte coupé à 3 lignes maximum */}
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {asso.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-2 pt-2 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                <Info className="w-4 h-4" /> En savoir plus...
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">
            Aucune association ne correspond à vos critères de recherche.
          </p>
        </div>
      )}

      {/* Info bas de page */}
      <div className="mt-12 bg-emerald-50 rounded-2xl border border-emerald-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-emerald-950 text-base">
            Vous gérez une association à Villers-sur-Authie ?
          </h3>
          <p className="text-emerald-800 text-sm mt-1">
            Modifications de bureau, mise à jour des coordonnées ou ajout d'une
            nouvelle association : contactez la mairie.
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
          LE CODE DE LA FENÊTRE MODALE DYNAMIQUE
          ========================================== */}
      {assoSelectionnee && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
          onClick={() => setAssoSelectionnee(null)} // Ferme la modale si on clique sur le fond sombre
        >
          {/* Contenu de la boîte blanche */}
          <div
            className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique à l'intérieur de la boîte
          >
            {/* Bouton de fermeture X */}
            <button
              onClick={() => setAssoSelectionnee(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge et Titre principal */}
            <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
              {assoSelectionnee.categorie}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-2 pr-8">
              {assoSelectionnee.nom}
            </h2>

            {/* Président */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-6 text-sm">
              <span className="text-slate-500">
                Président(e) de l'association :
              </span>{" "}
              <strong className="text-slate-800 font-bold">
                {assoSelectionnee.president}
              </strong>
            </div>

            {/* NOUVEAU BLOC AVEC GRANDE DESCRIPTION PARAGRAPHE PAR PARAGRAPHE */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Présentation détaillée
              </h3>
              <div className="text-sm text-slate-700 leading-relaxed text-justify space-y-4">
                {assoSelectionnee.paragraphs &&
                assoSelectionnee.paragraphs.length > 0 ? (
                  assoSelectionnee.paragraphs.map((paragraphe, idx) => (
                    <p key={idx}>{paragraphe}</p>
                  ))
                ) : (
                  // Sécurité si un élément n'a pas encore de tableau de paragraphes
                  <p>{assoSelectionnee.description}</p>
                )}
              </div>
            </div>

            {/* Coordonnées & Contacts */}
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Coordonnées & Contact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {assoSelectionnee.telephone && (
                  <a
                    href={`tel:${assoSelectionnee.telephone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/30 text-sm text-slate-700 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Téléphone
                      </span>
                      <span className="font-medium">
                        {assoSelectionnee.telephone}
                      </span>
                    </div>
                  </a>
                )}

                {assoSelectionnee.email && (
                  <a
                    href={`mailto:${assoSelectionnee.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/30 text-sm text-slate-700 transition-colors group truncate"
                  >
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                    <div className="truncate">
                      <span className="text-xs text-slate-400 block">
                        Adresse Email
                      </span>
                      <span className="font-medium truncate block">
                        {assoSelectionnee.email}
                      </span>
                    </div>
                  </a>
                )}

                {assoSelectionnee.site && (
                  <a
                    href={assoSelectionnee.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/30 text-sm text-slate-700 transition-colors group sm:col-span-2"
                  >
                    <Globe className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Site internet officiel
                      </span>
                      <span className="font-semibold text-emerald-600">
                        Visiter le site Web →
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

export default Associations;
