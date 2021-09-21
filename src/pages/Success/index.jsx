import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router";

const Success = () => {
  const history = useHistory();
  const { id } = useParams();
  return (
    <>
      <div>
        <h2>Bem vindo(a), {id}</h2>
      </div>

      <div>
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={() => history.push("/")}
        >
          Voltar à tela de cadastro
        </Button>
      </div>
    </>
  );
};

export default Success;
