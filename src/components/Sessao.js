import { useEffect, useState } from "react";
import DefaultTitle from "./DefaultTitle";
import SeatSection from "./SeatSection";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Sessao() {
  const { id } = useParams();
  const [dataSeats, setDataSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);


  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
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
  console.log(selectedSeats)
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
      <InfoArea>
        <div>
          <main></main>
          <h3>Selecionado</h3>
        </div>
        <div>
          <main></main>
          <h3>Disponível</h3>
        </div>
        <div>
          <main></main>
          <h3>Indisponível</h3>
        </div>
      </InfoArea>
      <ContainerFooter>
        <MovieBanner>
          <img src={dataSeats.movie?.posterURL} />
        </MovieBanner>
        <Title>
          {dataSeats.movie?.title} <br /> {dataSeats.day?.weekday} -{" "}
          {dataSeats.name}
        </Title>
      </ContainerFooter>
    </>
  );
}

const ContainerSeats = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

const InfoArea = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  height: auto;
  justify-content: space-evenly;
  div {
    height: 50px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    main {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: #FBE192;
    }
    h1 {
      font-family: "Roboto";
      font-size: 13px;
      font-weight: 400;
      color: #4e5a65;
    }
  }
`;

const ContainerFooter = styled.footer`
  height: 117px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #9eadba;
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
