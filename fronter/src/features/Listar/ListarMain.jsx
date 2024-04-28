import styled from "styled-components";
import Listar from "./ListarComponent";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 5rem 2.8rem 15rem;
  overflow: scroll;
`;

function ListrarMain() {
  return (
    <>
      <Main>
        <Listar/>
      </Main>
    </>
  );
}

export default ListrarMain;
