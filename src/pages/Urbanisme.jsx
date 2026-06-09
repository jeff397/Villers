import { useNavigate } from "react-router-dom";
import DemarcheTemplate from "../components/DemarcheTemplate";

function Urbanisme() {
  const navigate = useNavigate();

  const dataUrbanisme = {
    title: "Urbanisme, Travaux & PLU",
    description:
      "Vous souhaitez entreprendre des travaux de construction, de rénovation ou d'aménagement à Villers-sur-Authie ? Toutes les modifications extérieures (façades, clôtures, abris de jardin, extensions) nécessitent une autorisation préalable pour vérifier leur conformité avec le Plan Local d'Urbanisme (PLU).",
    delay: "1 à 2 mois (selon le type de dossier)",
    onlineLink: "https://www.service-public.fr/particuliers/vosdroits/N319",
    pieces: [
      "Le formulaire Cerfa complété et signé (Déclaration préalable ou Permis de construire)",
      "Un plan de situation du terrain à l'intérieur de la commune",
      "Un plan de masse des constructions à édifier ou à modifier (avec les cotes)",
      "Un plan de coupe du terrain et de la future construction",
      "Un plan des façades et des toitures (avant et après travaux)",
      "Un document graphique 3D ou une insertion paysagère pour visualiser le projet dans son environnement",
    ],
    steps: [
      {
        title: "Consulter le Plan Local d'Urbanisme (PLU)",
        desc: (
          <span>
            Le document d'urbanisme de la commune est en cours de déploiement
            sur les plateformes d'État. En attendant sa mise en ligne complète,
            vous pouvez{" "}
            <strong>consulter le PLU papier directement en mairie</strong> aux
            horaires d'ouverture, ou contacter le service urbanisme de la{" "}
            <strong>Communauté de Communes Ponthieu-Marquenterre</strong> pour
            connaître les règles applicables à votre parcelle.
          </span>
        ),
      },
      {
        title: "Remplir le dossier et réunir les plans",
        desc: "Téléchargez le formulaire Cerfa adapté à votre projet et constituez les différents plans obligatoires demandés.",
      },
      {
        title: "Déposer le dossier (en ligne ou en mairie)",
        desc: "Déposez votre dossier complet directement au secrétariat de la mairie en plusieurs exemplaires, ou utilisez la plateforme de saisie par voie électronique.",
      },
      {
        title: "Instruction et affichage de la décision",
        desc: "La mairie et les services instructeurs étudient votre demande. Dès réception de l'arrêté d'autorisation, vous devez obligatoirement l'afficher sur votre terrain pendant toute la durée des travaux.",
      },
    ],
  };

  return (
    <DemarcheTemplate
      title={dataUrbanisme.title}
      description={dataUrbanisme.description}
      delay={dataUrbanisme.delay}
      pieces={dataUrbanisme.pieces}
      steps={dataUrbanisme.steps}
      onlineLink={dataUrbanisme.onlineLink}
      onBack={() => navigate("/")}
    />
  );
}

export default Urbanisme;
