import DefaultTitle from "./DefaultTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Movie() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <>
      <DefaultTitle>
        <h1>Selecione o filme</h1>
      </DefaultTitle>
      <ContainerList>
        {items.map((item, i) => (
          <Link key={i} to={`/ticket/${item.id}`}>
            <StyleList>
              <img src={item.posterURL} />
            </StyleList>
          </Link>
        ))}
      </ContainerList>
    </>
  );
}

const ContainerList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyleList = styled.li`
  height: 209px;
  width: 145px;
  margin: 5px 15px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px 2px #0000001a;
  img {
    height: 193px;
    width: 129px;
  }
`;
