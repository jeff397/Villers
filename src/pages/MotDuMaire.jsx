import { useState } from "react";
import {
  MessageSquareText,
  Calendar,
  Download,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import motDuMaireData from "../data/motDuMaire.json";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function MotDuMaire() {
  const {
    titreActuel,
    periodeActuelle,
    pdfActuel,
    resumeCourt,
    archives = [],
  } = motDuMaireData || {};

  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);

  const [pdfEnLecture, setPdfEnLecture] = useState("");
  const [titreEnLecture, setTitreEnLecture] = useState("");
  const [periodeEnLecture, setPeriodeEnLecture] = useState("");

  const ouvrirLecteur = (pdfUrl, titre, periode) => {
    setPdfEnLecture(pdfUrl);
    setTitreEnLecture(titre);
    setPeriodeEnLecture(periode);
    setErrorMsg(null);
    setIsOpen(true);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setErrorMsg(null);
  }

  function onDocumentLoadError(error) {
    console.error("Erreur de chargement PDF :", error);
    setErrorMsg(error.message);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-12">
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
          <MessageSquareText className="w-8 h-8 text-emerald-600" />
          Le Mot du Maire
        </h1>
        <p className="text-slate-600 mt-2">
          Retrouvez les messages officiels de Villers-sur-Authie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {pdfActuel ? (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden flex flex-col h-full">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>Édition {periodeActuelle}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                    {titreActuel}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic border-l-4 border-emerald-500 pl-4 bg-slate-50 py-2 rounded-r-xl">
                    "{resumeCourt}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() =>
                      ouvrirLecteur(pdfActuel, titreActuel, periodeActuelle)
                    }
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition cursor-pointer"
                  >
                    <Eye size={16} />
                    Lire le message
                  </button>
                  <a
                    href={pdfActuel}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm px-5 py-3 rounded-xl transition-colors"
                  >
                    <Download size={16} /> Télécharger
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-500">
              Aucun document en ligne.
            </div>
          )}
        </div>

        <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/60 h-fit">
          <h3 className="font-bold text-slate-900 mb-4 text-base flex items-center gap-2">
            <span>🗄️</span> Bulletins Précédents
          </h3>
          <div className="space-y-3">
            {archives.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3.5 rounded-xl border border-slate-100 flex flex-col justify-between hover:border-emerald-500 transition-all group"
              >
                <div>
                  <span className="text-xs font-bold text-emerald-600 block mb-1">
                    {item.date}
                  </span>
                  <p className="text-xs text-slate-700 font-medium line-clamp-2 mb-3">
                    {item.titre}
                  </p>
                </div>

                <div className="flex gap-2 border-t border-slate-50 pt-2">
                  <button
                    onClick={() =>
                      ouvrirLecteur(item.lienPdf, item.titre, item.date)
                    }
                    className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                  >
                    <Eye size={12} /> Lire
                  </button>
                  <span className="text-slate-300 text-xs">|</span>
                  <a
                    href={item.lienPdf}
                    download
                    className="text-[11px] font-medium text-slate-500 hover:text-slate-700 flex items-center gap-1"
                  >
                    <Download size={12} /> Télécharger
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4">
          <div className="bg-slate-900 text-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="max-w-[80%]">
                <h3 className="text-sm font-bold truncate">{titreEnLecture}</h3>
                <p className="text-xs text-slate-400">
                  Édition {periodeEnLecture}
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
                    Impossible de charger ce document
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
                        Chargement du document...
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={Math.min(window.innerWidth - 64, 700)}
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

export default MotDuMaire;
