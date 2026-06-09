import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛡️</span>
              <span className="text-lg font-bold text-white tracking-wide">
                Votre commune
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Code officiel géographique : 80806 <br />
              Arrondissement de ****** <br />
              Département de *****
            </p>
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase text-emerald-400 tracking-wider mb-2 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" /> Horaires d'ouverture
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Mardi : 14h00 — 17h00 <br />
                Vendredi : 10h00 — 12h00
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#demarches"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services & Démarches
                </a>
              </li>
              <li>
                <a
                  href="#actualites"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Actualités
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Contact Secrétariat
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  1 Place de la Mairie <br />
                  80000 votre commune
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="tel:0322235122"
                  className="hover:text-emerald-400 transition-colors"
                >
                  03 22 23 24 25
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="mailto:mairie.villerssurauthie@wanadoo.fr"
                  className="hover:text-emerald-400 transition-colors break-all"
                >
                  mairie.votrecommune@free.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Partenaires
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="https://www.somme.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center"
                >
                  Le Département de la Somme{" "}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.hautsdefrance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center"
                >
                  Région Hauts-de-France{" "}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.service-public.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center"
                >
                  Service-Public.fr{" "}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 border-t border-slate-900 text-xs text-slate-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Mairie de Votre commune. Tous
            droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <a
              href="#mentions-legales"
              className="hover:text-slate-300 transition-colors"
            >
              Mentions Légales
            </a>
            <a href="#rgpd" className="hover:text-slate-300 transition-colors">
              Politique de Confidentialité
            </a>
            <a
              href="#accessibilite"
              className="hover:text-slate-300 transition-colors"
            >
              Accessibilité : non conforme
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
