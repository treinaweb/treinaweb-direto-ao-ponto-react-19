import React, { useActionState } from "react";

const FormState = () => {
  const validarUsuario = (prevState, formData) => {
    const name = formData.get("name");
    const age = formData.get("age");

    console.log(prevState);

    if (age >= 18) {
      return {
        success: true,
        name,
        text: "Idade Permitida!"
      }
    } else {
      return {
        success: false,
        name,
        text: "Você deve ter mais de 18 anos de idade!"
      }
    }
  };

  const [message, actionForm] = useActionState(validarUsuario, null)

  return (
    <form action={actionForm}>
      <label>Nome:</label>
      <br />
      <input
        type="text"
        name="name"
      />
      <br />
      <br />
      <label>Idade: </label>
      <br />
      <input
        type="number"
        name="age"
      />
      <br />
      <br />
      <button type="submit">Enviar</button>
      <br />
      <br />
      {message && <h3>{`Olá ${message.name}!`}</h3>}
      {message && <h3>{message.text}</h3>}
    </form>
  );
};

export default FormState;