import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    // Si l'URL contient une ancre (ex: /#demarches)
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // S'il n'y a pas d'ancre (changement de page classique comme /tourisme), on remonte tout en haut
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
