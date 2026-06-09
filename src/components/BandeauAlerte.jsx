import { Megaphone, AlertTriangle, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import alerteData from "../data/alerte.json";

function BandeauAlerte() {
  const { actif, type, message, lien } = alerteData || {};
  const [aEteFerme, setAEteFerme] = useState(false);

  const isVisible = !!actif && !!message && !aEteFerme;

  if (!isVisible) return null;

  const estUrgence = type === "urgence";

  // Styles ajustés pour passer le test de contraste WAVE haut la main
  const styles = estUrgence
    ? {
        bg: "bg-red-700 border-red-800 text-white", // Rouge légèrement intensifié
        icon: (
          <AlertTriangle className="w-5 h-5 animate-pulse text-amber-200" />
        ),
        badge: "bg-red-950 text-red-100",
        label: "Vigilance",
      }
    : {
        bg: "bg-emerald-700 border-emerald-800 text-white", // Vert légèrement intensifié
        icon: <Megaphone className="w-5 h-5 text-emerald-100" />,
        badge: "bg-emerald-950 text-emerald-100",
        label: "Info",
      };

  return (
    <div
      className={`relative w-full z-50 shadow-sm border-b border-black/10 block ${styles.bg}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center flex-wrap gap-3 text-center">
          <div className="flex items-center gap-2">
            {styles.icon}

            <span
              className={`text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${styles.badge}`}
            >
              {styles.label}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-wide">
            {message}
            {lien && (
              <Link
                to={lien}
                className="inline-flex items-center gap-1 ml-2 text-xs underline font-bold text-white hover:opacity-90 transition-opacity"
              >
                En savoir plus <ArrowRight size={12} className="inline" />
              </Link>
            )}
          </p>
        </div>

        <button
          onClick={() => setAEteFerme(true)}
          className="p-1 rounded-lg bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer shrink-0"
          title="Fermer l'alerte"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default BandeauAlerte;
