import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage() {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Title>
        Pedido feito <br /> com sucesso!
      </Title>
      <CardInfo>
        <h1>Filme e sessão</h1>
        <h2 data-identifier="movie-session-infos-reserve-finished">{location.state.title}</h2>
        <h2 data-identifier="movie-session-infos-reserve-finished">
          {location.state.date}  {location.state.nome}
        </h2>
      </CardInfo>
      <CardInfo>
        <h1>Ingressos</h1>
        {location.state.seats.map((el, i) => (
          <h2 data-identifier="seat-infos-reserve-finished" key={i}>Assento {el}</h2>
        ))}
      </CardInfo>
      <CardInfo>
        <h1>Comprador</h1>
        <h2 data-identifier="buyer-infos-reserve-finished">Nome: {location.state.name}</h2>
        <h2 data-identifier="buyer-infos-reserve-finished">CPF: {location.state.cpf}</h2>
      </CardInfo>

      <BackStart>
        <Link to="/">
          <button data-identifier="back-to-home-btn">Voltar pra Home</button>
        </Link>
      </BackStart>
    </>
  );
}

const BackStart = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #e8833a;
    cursor: pointer;

    color: white;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    border-color: none;
    box-shadow: none;
  }
`;

const Title = styled.div`
  height: 110px;
  width: 100%;
  margin-top: 67px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #247a6b;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 700;
`;

const CardInfo = styled.div`
  height: auto;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-family: "Roboto";

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 5px;
  }
`;
