import styled from "styled-components";
import Modificar from "./ModificarForm";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 5rem 2.8rem 15rem;
  overflow: scroll;
`;

function RegistroMain() {
  return (
    <>
      <Main>
        <Modificar/>
      </Main>
    </>
  );
}

export default RegistroMain;
