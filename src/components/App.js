import { GlobalStyle } from "../GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import Movie from "./Movie";
import Tickets from "./Tickets";
import Sessao from "./Sessao";
import SuccessPage from "./SuccessPage";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/ticket/:idFilme" element={<Tickets />} />
        <Route path="/sessao/:idSessao" element={<Sessao />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
