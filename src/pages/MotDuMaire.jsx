import { MessageSquareText, Calendar } from "lucide-react";

function MotDuMaire() {
  // Liste fictive d'archives pour donner du corps à ta page pendant la présentation
  const archives = [
    {
      date: "Janvier 2026",
      titre: "Vœux de la nouvelle année et projets communaux",
    },
    {
      date: "Septembre 2025",
      titre: "Rentrée scolaire et avancement des travaux de l'église",
    },
    {
      date: "Mai 2025",
      titre: "Budget communal et entretien des espaces verts",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-12">
      {/* En-tête de la page */}
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <MessageSquareText className="w-8 h-8 text-emerald-600" />
          Le Mot du Maire
        </h1>
        <p className="text-slate-600 mt-2">
          Retrouvez les messages officiels de Monsieur le Maire à l'attention
          des habitants de Villers-sur-Authie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* COLONNE GAUCHE : Le mot récent (Vedette) avec texte habillé */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>Publié récemment</span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Bienvenue sur le nouveau site internet de notre commune !
          </h2>

          {/* LE BLOC DE TEXTE PRINCIPAL (Le float de l'image va s'appliquer par rapport à ce conteneur) */}
          <div className="text-slate-700 leading-relaxed text-sm text-justify">
            {/* LA PHOTO DU MAIRE EN HABILLAGE (FLOAT) */}
            {/* Sur mobile : centrée au-dessus. Sur PC : flotte à gauche avec marges à droite et en bas */}
            <div className="w-full sm:w-48 sm:float-left mb-4 sm:mb-2 sm:mr-6 mx-auto">
              <div className="aspect-3/4 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex items-center justify-center relative group">
                <img
                  src="/maire.jpg"
                  alt="Portrait de Monsieur le Maire"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center text-slate-400 text-xs text-center p-4">
                  [Photo de M. le Maire]
                </div>
              </div>
            </div>

            {/* LE CONTENU DU TEXTE (qui s'enroule naturellement) */}
            <p className="font-semibold text-slate-900 mb-3">
              Chères habitantes, chers habitants, chers visiteurs,
            </p>

            <p className="mb-3">
              C'est avec une grande fierté que nous vous présentons aujourd'hui
              la nouvelle vitrine numérique de Villers-sur-Authie. Plus moderne,
              plus accessible et résolument tournée vers le quotidien de notre
              village, cette plateforme a été pensée pour vous faciliter la vie.
            </p>

            <p className="mb-3">
              Vous y trouverez en quelques clics les horaires du secrétariat,
              les modalités de réservation de notre salle des fêtes, les
              consignes de tri, ainsi que toute l'actualité de nos artisans et
              associations. Notre volonté est de renforcer le lien entre la
              municipalité et les administrés, tout en offrant un espace de
              découverte chaleureux pour ceux qui souhaitent visiter notre belle
              vallée de l'Authie.
            </p>

            <p className="mb-3">
              Ce site évoluera avec le temps et s'enrichira régulièrement de vos
              informations, des comptes-rendus de conseils municipaux et des
              événements à venir. Nous vous invitons à l'explorer dès
              aujourd'hui et à vous l'approprier.
            </p>

            <p className="pt-4 font-semibold text-slate-900 block text-right sm:text-left clear-both">
              Le Conseil Municipal & Monsieur le Maire
            </p>
          </div>
        </div>

        {/* COLONNE DROITE : Les archives */}
        <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/60">
          <h3 className="font-bold text-slate-900 mb-4 text-base">
            🗄️ Archives & Bulletins
          </h3>
          <div className="space-y-3">
            {archives.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:border-emerald-500 transition-colors cursor-pointer"
              >
                <span className="text-xs font-bold text-emerald-600 block mb-1">
                  {item.date}
                </span>
                <p className="text-xs text-slate-700 font-medium line-clamp-2">
                  {item.titre}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotDuMaire;
