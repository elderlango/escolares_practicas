import styled from "styled-components";
import Login from "./ObtenerForm";


const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 5rem 2.8rem 15rem;
  overflow: scroll;
`;

function ObtenerMain() {
  return (
    <>
      <Main>
        <Login/>
      </Main>
    </>
  );
}

export default ObtenerMain;
