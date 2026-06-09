import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import dataComptesRendus from "../data/comptesRendus.json";

// Importations obligatoires des styles de couches react-pdf
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Moteur de rendu local blindé (le même que pour le Mot du Maire)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function ComptesRendus() {
  // Sécurité si le fichier JSON est vide ou mal lu au démarrage
  const listeCR = dataComptesRendus?.liste || [];

  // États pour la modale de lecture interactive
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);

  // États pour traquer le PDF sélectionné
  const [pdfEnLecture, setPdfEnLecture] = useState("");
  const [titreEnLecture, setTitreEnLecture] = useState("");

  const ouvrirLecteur = (pdfUrl, titre) => {
    setPdfEnLecture(pdfUrl);
    setTitreEnLecture(titre);
    setErrorMsg(null);
    setIsOpen(true);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setErrorMsg(null);
  }

  function onDocumentLoadError(error) {
    console.error("Erreur de chargement du PV :", error);
    setErrorMsg(error.message);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <FileText className="w-8 h-8 text-emerald-600" />
          Comptes-rendus des Conseils
        </h1>
        <p className="text-slate-600 mt-2">
          Consultez et téléchargez les procès-verbaux officiels des dernières
          délibérations municipales.
        </p>
      </div>

      {listeCR.length > 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs divide-y divide-slate-100 overflow-hidden">
          {listeCR.map((cr, index) => (
            <div
              key={index}
              className="p-4 flex items-center justify-between hover:bg-slate-50/80 transition-colors group"
            >
              <div className="flex items-center gap-3 truncate mr-4">
                <FileText className="w-5 h-5 text-red-500 shrink-0" />
                <div className="truncate">
                  <h3 className="font-semibold text-slate-900 text-sm truncate">
                    {cr.titre}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Publié le {cr.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => ouvrirLecteur(cr.fichier, cr.titre)}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Eye size={14} />
                  <span className="hidden sm:inline">Lire</span>
                </button>

                <a
                  href={cr.fichier}
                  download
                  className="bg-slate-100 p-2 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors"
                  title="Télécharger le PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-sm">
          Aucun compte-rendu disponible pour le moment.
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4">
          <div className="bg-slate-900 text-white rounded-2xl w-full max-w-4xl max-h-[95vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="max-w-[85%]">
                <h3 className="text-sm font-bold truncate">{titreEnLecture}</h3>
                <p className="text-xs text-emerald-500 font-medium mt-0.5">
                  Registre Officiel
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex justify-center items-start bg-slate-800">
              {errorMsg ? (
                <div className="p-6 bg-red-900/50 border border-red-500 rounded-xl text-center max-w-md my-auto">
                  <p className="text-sm font-bold text-red-200">
                    Impossible d'ouvrir ce compte-rendu
                  </p>
                  <p className="text-xs text-red-300 mt-1 italic">{errorMsg}</p>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-xl overflow-hidden block">
                  <Document
                    file={pdfEnLecture}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <div className="p-12 text-slate-400 text-sm italic flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        Chargement des délibérations...
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={Math.min(window.innerWidth - 64, 720)}
                    />
                  </Document>
                </div>
              )}
            </div>

            {numPages > 1 && !errorMsg && (
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-center gap-6">
                <button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber((prev) => prev - 1)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-xl transition-all cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs font-semibold tracking-wider text-slate-300">
                  PAGE {pageNumber} SUR {numPages}
                </span>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber((prev) => prev + 1)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-xl transition-all cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ComptesRendus;
