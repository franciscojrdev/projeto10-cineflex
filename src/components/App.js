import { GlobalStyle } from "../GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import Movie from "./Movie";
import Tickets from "./Tickets";
import Sessao from "./Sessao";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/ticket/:id" element={<Tickets />} />
        <Route path="/sessao" element={<Sessao />} />
      </Routes>
    </BrowserRouter>
  );
}
