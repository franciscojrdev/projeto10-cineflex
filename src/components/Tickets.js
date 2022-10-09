import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultTitle from "./DefaultTitle";
import axios from "axios";
import styled from "styled-components";
import TicketsSection from "./TicketsSection";
export default function Tickets() {
  const { id } = useParams();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
    );

    promise.then((res) => setTickets(res.data));

    promise.catch((res)=> console.log(res.data));
  }, []);

  return (
    <>
      <DefaultTitle>
        <h1>Selecione o horário</h1>
      </DefaultTitle>
      <ContainerTickets>
        {tickets &&
          tickets.days?.map((el) => (
            <TicketsSection
              date={el.date}
              weekday={el.weekday}
              showtimes={el.showtimes}
            />
          ))}
      </ContainerTickets>
      <ContainerFooter>
        <MovieBanner>
          <img src={tickets.posterURL}></img>
        </MovieBanner>
        <Title>{tickets.title} </Title>
      </ContainerFooter>
    </>
  );
}

const ContainerTickets = styled.div`
  width: auto;
  height: auto;
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
