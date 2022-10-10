import styled from "styled-components";
export default function DefaultTitle(props) {
  return (
    <ContainerTitle>
      {props.children}
    </ContainerTitle>
  );
}

const ContainerTitle = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 400;
    color: #293845;
  }
`;
