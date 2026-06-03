import { useNavigate } from "react-router-dom";
import DemarcheTemplate from "../components/DemarcheTemplate";

function EtatCivil() {
  const navigate = useNavigate();

  const dataEtatCivil = {
    title: "Carte Nationale d'Identité & Passeport",
    description:
      "La mairie de Villers-sur-Authie vous accompagne dans vos démarches de demande ou de renouvellement de titres sécurisés. Notez que le dépôt du dossier se fait uniquement sur rendez-vous après avoir complété votre pré-demande.",
    delay: "3 à 5 semaines (selon la période)",
    onlineLink: "https://www.service-public.fr/",
    pieces: [
      "Le numéro de pré-demande ANTS (obtenu en ligne)",
      "Une photo d'identité récente de moins de 6 mois et conforme aux normes",
      "Un justificatif de domicile de moins de un an (facture électricité, eau, téléphone...)",
      "L'ancien titre sécurisé (carte d'identité ou passeport) en cas de renouvellement",
      "Un acte de naissance de moins de 3 mois (uniquement si l'ancien titre est périmé depuis plus de 5 ans ou perdu)",
    ],
    steps: [
      {
        title: "Effectuer la pré-demande en ligne",
        desc: "Rendez-vous sur le site officiel de l'ANTS ou Service-Public.fr pour remplir votre dossier et obtenir votre numéro de pré-demande.",
      },
      {
        title: "Rassembler vos pièces justificatives",
        desc: "Préparez l'ensemble des documents originaux demandés ainsi que les photos d'identité conformes.",
      },
      {
        title: "Prendre rendez-vous et déposer le dossier",
        desc: "Venez en mairie le jour du rendez-vous pour la prise d'empreintes et la vérification des pièces originales de votre dossier.",
      },
      {
        title: "Retrait de votre nouveau titre",
        desc: "Dès réception du SMS de confirmation, présentez-vous en mairie (sans rendez-vous) pour retirer votre nouvelle carte ou passeport.",
      },
    ],
  };

  return (
    <DemarcheTemplate
      title={dataEtatCivil.title}
      description={dataEtatCivil.description}
      delay={dataEtatCivil.delay}
      pieces={dataEtatCivil.pieces}
      steps={dataEtatCivil.steps}
      onlineLink={dataEtatCivil.onlineLink}
      onBack={() => navigate("/")} // Utilise le vrai routage pour revenir à l'accueil
    />
  );
}

export default EtatCivil;
