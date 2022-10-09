import styled from "styled-components";

export default function SeatSection({seat,name, isAvailable,handleSeat }) {
  return (
    <>
      {isAvailable ? (
        <SeatCircle cor={!seat.selected?"#C3CFD9":"#1AAE9E"} onClick={()=>handleSeat(seat)}>{name}</SeatCircle>
      ) : (
        <SeatCircle cor={"#FBE192"} onClick={()=>handleSeat(seat)}>{name}</SeatCircle>
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
  /* #C3CFD9 */
  border: 1px solid #808f9d;
  background-color: ${props => props.cor};
  font-family: "Roboto";
  font-size: 11px;
  font-weight: 400;
  text-align: center;
`;
