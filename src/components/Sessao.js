import { useEffect, useState } from "react";
import DefaultTitle from "./DefaultTitle";
import axios from "axios";
import styled from "styled-components";

export default function Sessao() {
  const [dataSeats, setDataSeats] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/10/seats"
    );

    promise.then((res) => setDataSeats(res.data));

  }, []);
  console.log(dataSeats)
  return (
    <>
      <DefaultTitle>
        <h1>Selecione o(s) assento(s)</h1>
      </DefaultTitle>
      <ContainerSeats>{console.log(dataSeats)}</ContainerSeats>
      <ContainerFooter>
        <MovieBanner>
          <img src={dataSeats.movie.posterURL}/>
        </MovieBanner>
        <Title>{dataSeats.movie.title} <br/> {dataSeats.day.weekday} - {dataSeats.name}</Title>
      </ContainerFooter>
    </>
  );
}

const ContainerSeats = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
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