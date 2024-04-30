import styled from "styled-components";
import Eliminar from "./EliminarForm";


const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 5rem 2.8rem 15rem;
  overflow: scroll;
`;

function EliminarMain() {
  return (
    <>
      <Main>
        <Eliminar/>
      </Main>
    </>
  );
}

export default EliminarMain;
