import {
  Users,
  ShoppingBag,
  Compass,
  Leaf,
  Tent,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const demarches = [
    {
      title: "Associations & Loisirs",
      desc: "Annuaire des clubs sportifs, culturels et comité des fêtes du village.",
      icon: <Users className="w-6 h-6 text-white" />,
      bg: "bg-blue-600 hover:bg-blue-700 text-white border-blue-500 shadow-blue-900/10",
      iconBg: "bg-white/20 border-white/20",
    },
    {
      title: "Artisans & Commerces",
      desc: "Soutenez l'économie locale : retrouvez les professionnels de la commune.",
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      bg: "bg-amber-600 hover:bg-amber-700 text-white border-amber-500 shadow-amber-900/10",
      iconBg: "bg-white/20 border-white/20",
    },
    {
      title: "Hébergements & Tourisme",
      desc: "Guide des gîtes, chambres d'hôtes et meublés de tourisme de la commune.",
      icon: <Compass className="w-6 h-6 text-white" />,
      bg: "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500 shadow-emerald-900/10",
      iconBg: "bg-white/20 border-white/20",
    },
    {
      title: "Cadre de Vie & Civisme",
      desc: "Règles de bon voisinage, entretien des haies, bruits de tonte, nids de frelons...",
      icon: <Leaf className="w-6 h-6 text-white" />,
      bg: "bg-green-600 hover:bg-green-700 text-white border-green-500 shadow-green-900/10",
      iconBg: "bg-white/20 border-white/20",
    },
    {
      title: "Salle des Fêtes",
      desc: "Tarifs, disponibilités et réservation de la salle...",
      icon: <Tent className="w-6 h-6 text-white" />,
      bg: "bg-purple-600 hover:bg-purple-700 text-white border-purple-500 shadow-purple-900/10",
      iconBg: "bg-white/20 border-white/20",
    },
    {
      title: "Le Mot du Maire",
      desc: "Consultez le message de Monsieur le Maire aux habitants et les archives de la commune.",
      icon: <MessageSquareText className="w-6 h-6 text-white" />,
      bg: "bg-sky-700 hover:bg-sky-800 text-white border-sky-600 shadow-sky-900/10",
      iconBg: "bg-white/20 border-white/20",
    },
  ];

  return (
    <section className="pt-16 pb-48 bg-slate-50" id="demarches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Au cœur de notre village
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Retrouvez toutes les informations utiles au quotidien, les activités
            de la commune et les services mis à votre disposition à
            Villers-sur-Authie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demarches.map((item, index) => {
            const cardClasses = `group p-6 rounded-2xl border shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-start space-x-4 text-left ${item.bg}`;

            const cardContent = (
              <>
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-xs ${item.iconBg}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-100/90 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </>
            );

            if (item.title === "Associations & Loisirs") {
              return (
                <Link key={index} to="/associations" className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            if (item.title === "Artisans & Commerces") {
              return (
                <Link key={index} to="/professionnels" className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            if (item.title === "Hébergements & Tourisme") {
              return (
                <Link key={index} to="/tourisme" className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            if (item.title === "Cadre de Vie & Civisme") {
              return (
                <Link key={index} to="/cadre-de-vie" className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            if (item.title === "Salle des Fêtes") {
              return (
                <Link key={index} to="/salle-des-fetes" className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            if (item.title === "Le Mot du Maire") {
              return (
                <Link key={index} to="/mot-du-maire" className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            return (
              <a
                key={index}
                href={`#${item.title.toLowerCase().replace(/ /g, "-").replace(/[éèê]/g, "e")}`}
                className={cardClasses}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
