import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TicketsSection({ date, weekday, showtimes }) {
  return (
    <Section>
      <h1>
        {date} - {weekday}
      </h1>
      {showtimes.map((el) => (
        <Link to={`/sessao/${el.id}`}>
          <button>{el.name}</button>
        </Link>
      ))}
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding-left: 20px;
  border: 1px solid black;

  h1 {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 22px;
    color: #293845;
  }
  button {
    height: 43px;
    width: 83px;
    margin-bottom: 23px;
    margin-right: 20px;
    border-radius: 3px;
    background: #e8833a;
    border-color: #e8833a;

    color: white;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
  }
`;
