import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Seu nome deve conter apenas letras")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)(?=.*?[0-9])((?=.*[a-zA-Z])).*$/,
        "Sua senha deve conter letras e números, e ao menos um caractere especial!"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), "As senhas diferem!"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    history.push(`/success/${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          type="password"
          label="Senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          type="password"
          label="Confirmar senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="success">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
