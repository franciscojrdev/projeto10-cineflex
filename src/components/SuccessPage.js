import styled from "styled-components";

export default function SuccessPage() {
  return (
    <>
      <Title>Pedido feito <br /> com sucesso!</Title>
    </>
  );
}

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
