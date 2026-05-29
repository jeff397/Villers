import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services"; // 1. On importe les Services

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />

      {/* 2. On affiche la grille des démarches */}
      <Services />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Les actualités viendront se glisser ici un peu plus tard */}
      </main>
    </div>
  );
}

export default App;
