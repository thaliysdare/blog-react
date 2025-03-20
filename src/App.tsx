import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Componentes
import Navbar, { ModoNavbar } from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import './App.css';

// Paginas
import Inicio from "./paginas/Inicio";
import Documentos from "./paginas/Documentos";
import Documento from "./paginas/Documento";

function Header() {
  const isHome = useLocation().pathname === '/';

  const modoNavbar = isHome ? ModoNavbar.Transparente : ModoNavbar.Escuro;

  return (
    <div className="relative">
      <Navbar modoNavbar={modoNavbar} />
      {isHome && <Banner />}
    </div>
  )
}

function App() {

  return (
    <Router>
      <Header />
      <main className="max-w-9/12 mx-auto my-8" id="conteudo">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/documentos/:id" element={<Documento/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
