import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import NotesIndex from "./pages/NotesIndex";
import NotFound from "./pages/NotFound";

// react-markdown only ships to readers who actually open a note.
const NotePage = lazy(() => import("./pages/NotePage"));

function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-[0.16em] focus:text-paper focus:uppercase"
      >
        Skip to content
      </a>

      <ScrollManager />
      <Navbar />

      <main id="main" className="relative z-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/notes" element={<NotesIndex />} />
            <Route path="/notes/:slug" element={<NotePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
