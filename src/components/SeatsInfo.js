import styled from "styled-components";
export default function SeatsInfo() {
  return (
    <InfoArea>
      <div data-identifier="seat-selected-subtitle">
        <Circle1></Circle1>
        <h3>Selecionado</h3>
      </div>
      <div data-identifier="seat-available-subtitle">
        <Circle2></Circle2>
        <h3>Disponível</h3>
      </div>
      <div data-identifier="seat-unavailable-subtitle">
        <Circle3></Circle3>
        <h3>Indisponível</h3>
      </div>
    </InfoArea>
  );
}

const InfoArea = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  div {
    height: 50px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    h3 {
      font-family: "Roboto";
      font-size: 13px;
      font-weight: 400;
      color: #4e5a65;
    }
  }
`;
const Circle1 = styled.main`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #1AAE9E;
`;
const Circle2 = styled.main`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #C3CFD9;
`;
const Circle3 = styled.main`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fbe192;
`;
