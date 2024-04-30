import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
  <Form>
    <FormRowVertical>
      <Button onClick={() => navigate("/Registro")}>
        INICIO
      </Button>
    </FormRowVertical>
  </Form>
  );
}

export default Home;

