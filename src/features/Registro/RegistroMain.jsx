import styled from "styled-components";
import Registro from "./RegistroForm";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 5rem 2.8rem 15rem;
  overflow: scroll;
`;

function RegistroMain() {
  return (
    <>
      <Main>
        <Registro/>
      </Main>
    </>
  );
}

export default RegistroMain;
