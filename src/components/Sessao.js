import { useEffect, useState } from "react";
import DefaultTitle from "./DefaultTitle";
import SeatSection from "./SeatSection";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import SeatsInfo from "./SeatsInfo";

export default function Sessao() {
  const { idSessao } = useParams();
  const [dataSeats, setDataSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => setDataSeats(res.data));
  }, []);

  function handleSeat(seat) {
    //Se o assento estiver indisponível não faz nada
    if (seat.isAvailable === false) {
      alert("Esse assento não está disponível");
      return;
    }
    //Toggle - "Liga e desliga" a seleção
    seat.selected = !seat.selected;
    //Se o estado atual é não selecionado precisamos remover o assento
    if (!seat.selected) {
      const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
      setSelectedSeats([...filteredSeats]);
      return;
    }
    //Adicionamos o assento a lista de assentos selecionados
    setSelectedSeats([...selectedSeats, seat]);
    return;
  }
  console.log(selectedSeats);
  return (
    <>
      <DefaultTitle>
        <h1>Selecione o(s) assento(s)</h1>
      </DefaultTitle>
      <ContainerSeats>
        {dataSeats.seats?.map((seat, i) => (
          <SeatSection
            key={i}
            seat={seat}
            name={seat.name}
            isAvailable={seat.isAvailable}
            handleSeat={handleSeat}
          />
        ))}
      </ContainerSeats>
      <SeatsInfo />
      <ContainerForm>
        <form>
          <label htmlFor="fname">Nome do Comprador</label>
          <input
            id="fname"
            name="nome"
            type="text"
            placeholder="Digite seu nome..."
          ></input>
          <label htmlFor="fcpf">CPF do Comprador</label>
          <input
            id="fcpf"
            name="cpf"
            type="number"
            placeholder="Digite seu CPF..."
          ></input>
        </form>
        <button>Reservar assento(s)</button>
      </ContainerForm>
      <ContainerFooter>
        <MovieBanner>
          <img src={dataSeats.movie?.posterURL} />
        </MovieBanner>
        <Title>
          {dataSeats.movie?.title} <br />
          {dataSeats.day?.weekday} - {dataSeats.name}
        </Title>
      </ContainerFooter>
    </>
  );
}

const ContainerForm = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px 0;
  margin-bottom: 120px;
  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  label {
    text-align: start;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    color: #293845;
    margin: 5px 0;
  }
  input {
    height: 51px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #D4D4D4;
    padding-left: 20px;
    ::placeholder {
      font-family: "Roboto";
      font-size: 18px;
      font-style: italic;
      font-weight: 400;
      text-align: left;
      color: #AFAFAF;
    }
  }
  button {
    height: 42px;
    width: 225px;
    background-color: #e8833a;
    border-radius: 3px;
    color: white;
    border: none;
    margin-top: 30px;
  }
`;

const ContainerSeats = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

const ContainerFooter = styled.footer`
  height: 117px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
`;

const MovieBanner = styled.div`
  height: 89px;
  width: 64px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px #0000001a;
  margin: 20px;
  img {
    height: 72px;
    width: 48px;
  }
`;

const Title = styled.h1`
  font-family: "Roboto";
  font-size: 26px;
  font-weight: 400;
  color: #293845;
`;
