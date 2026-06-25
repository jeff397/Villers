import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ScrollToAnchor from "./components/ScrollToAnchor";
import BandeauAlerte from "./components/BandeauAlerte";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EtatCivil from "./pages/EtatCivil";
import Urbanisme from "./pages/Urbanisme";
import Tourisme from "./pages/Tourisme";
import DechetsTri from "./pages/DechetsTri";
import SalleDesFetes from "./pages/SalleDesFetes";
import InfosPratiques from "./pages/InfosPratiques";
import MotDuMaire from "./pages/MotDuMaire";
import Associations from "./pages/Associations";
import ArtisansCommerces from "./pages/ArtisansCommerces";
import CadreDeVie from "./pages/CadreDeVie";
import EquipeMunicipale from "./pages/EquipeMunicipale";
import ComptesRendus from "./pages/ComptesRendus";
import Procurations from "./pages/Procurations";
import VieCommune from "./pages/VieCommune";
import VieSolidaire from "./pages/VieSolidaire";
import LoginForm from "./components/LoginForm";

function AdminRedirect() {
  const isAuthenticated =
    sessionStorage.getItem("admin_authenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  window.location.replace("/admin/index.html");
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToAnchor />

      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <BandeauAlerte />
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/admin" element={<AdminRedirect />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/etat-civil" element={<EtatCivil />} />
            <Route path="/urbanisme" element={<Urbanisme />} />
            <Route path="/tourisme" element={<Tourisme />} />
            <Route path="/dechetsTri" element={<DechetsTri />} />
            <Route path="/salle-des-fetes" element={<SalleDesFetes />} />
            <Route path="/infos-pratiques" element={<InfosPratiques />} />
            <Route path="/mot-du-maire" element={<MotDuMaire />} />
            <Route path="/associations" element={<Associations />} />
            <Route path="/professionnels" element={<ArtisansCommerces />} />
            <Route path="/cadre-de-vie" element={<CadreDeVie />} />
            <Route path="/equipe-municipale" element={<EquipeMunicipale />} />
            <Route path="/comptes-rendus" element={<ComptesRendus />} />
            <Route path="/procurations" element={<Procurations />} />
            <Route path="/vie-de-la-commune" element={<VieCommune />} />
            <Route path="/vie-solidaire" element={<VieSolidaire />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
