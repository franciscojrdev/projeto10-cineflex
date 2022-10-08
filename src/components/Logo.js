import styled from "styled-components";

export default function Logo() {
  return (
    <StyledLogo>
      <h1>CINEFLEX</h1>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  height: 67px;
  width: 100%;
  background-color: #c3cfd9;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Roboto";
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
