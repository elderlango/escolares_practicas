import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../../ui/DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  height: 6.1rem;
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <Button variation="swapii" onClick={() => navigate("/Eliminar")}> Eliminar</Button>
      </li>
      <li>
        <Button  onClick={() => navigate("/Listar")}> Listar</Button>
      </li>
      <li>
        <Button variation="swapii" onClick={() => navigate("/Modificar")}> Modificar</Button>
      </li>
      <li>
        <Button onClick={() => navigate("/Obtener")}> Obtener</Button>
      </li>
      <li>
        <Button variation="swapii" onClick={() => navigate("/Registro")}> Registro</Button>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function HomeHeader() {
  return (
    <>
      <StyledHeader>
        <HeaderMenu />
      </StyledHeader>
    </>
  );
}
export default HomeHeader;
