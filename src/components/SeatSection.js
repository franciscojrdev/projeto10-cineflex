import styled from "styled-components";

export default function SeatSection({ seat, name, isAvailable, handleSeat }) {
  return (
    <>
      {isAvailable ? (
        <SeatCircle
          cor={!seat.selected ? "#C3CFD9" : "#1AAE9E"}
          borderColor={!seat.selected ? "#808f9d" : "#0E7D71"}
          onClick={() => handleSeat(seat)}
        >
          {name}
        </SeatCircle>
      ) : (
        <SeatCircle cor={"#FBE192"} borderColor={"#F7C52B"} onClick={() => handleSeat(seat)}>
          {name}
        </SeatCircle>
      )}
    </>
  );
}

const SeatCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.cor};
  font-family: "Roboto";
  font-size: 11px;
  font-weight: 400;
  text-align: center;
`;
