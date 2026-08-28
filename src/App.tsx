import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index";
import ConsertoArCondicionado from "./pages/ConsertoArCondicionado";
import InstalacaoArCondicionado from "./pages/InstalacaoArCondicionado";
import LimpezaHigienizacao from "./pages/LimpezaHigienizacao";
const LazyNotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <HelmetProvider>
    <SpeedInsights />
    <Analytics />
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#071324] text-white gap-3">
            <span className="w-10 h-10 rounded-full border-4 border-sky-400 border-t-transparent animate-spin" />
            <span className="text-sm font-semibold text-slate-300">Carregando AR FRI Climatização...</span>
          </div>
        }
      >
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Index />} />

          {/* Rota 1: Conserto & Manutenção de Ar Condicionado (Carro-chefe) */}
          <Route path="/conserto-ar-condicionado" element={<ConsertoArCondicionado />} />
          <Route path="/conserto" element={<ConsertoArCondicionado />} />
          <Route path="/manutencao-ar-condicionado" element={<ConsertoArCondicionado />} />
          <Route path="/manutencao" element={<ConsertoArCondicionado />} />

          {/* Rota 2: Instalação Especializada de Ar Condicionado */}
          <Route path="/instalacao-ar-condicionado" element={<InstalacaoArCondicionado />} />
          <Route path="/instalacao" element={<InstalacaoArCondicionado />} />

          {/* Rota 3: Limpeza & Higienização Profunda de Ar Condicionado */}
          <Route path="/limpeza-higienizacao-ar-condicionado" element={<LimpezaHigienizacao />} />
          <Route path="/limpeza-ar-condicionado" element={<LimpezaHigienizacao />} />
          <Route path="/limpeza" element={<LimpezaHigienizacao />} />
          <Route path="/higienizacao" element={<LimpezaHigienizacao />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<LazyNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
