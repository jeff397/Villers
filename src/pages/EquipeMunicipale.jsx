import { Users } from "lucide-react";

function EquipeMunicipale() {
  const elus = [
    {
      nom: "Jean-Marie Guesdon",
      role: "Maire",
      commission: "Toutes les commissions",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
    {
      nom: "Marie-Claire Durand",
      role: "1ère Adjointe",
      commission: "Finances & Urbanisme",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12">
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <Users className="w-8 h-8 text-emerald-600" />
          Notre Équipe Municipale
        </h1>
        <p className="text-slate-600 mt-2">
          Découvrez les élus qui œuvrent au quotidien pour le développement et
          le bien-être de Villers-sur-Authie.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {elus.map((elu, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center"
          >
            <img
              src={elu.image}
              alt={elu.nom}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="font-bold text-slate-900">{elu.nom}</h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
              {elu.role}
            </span>
            <p className="text-xs text-slate-500 mt-4">{elu.commission}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EquipeMunicipale;
