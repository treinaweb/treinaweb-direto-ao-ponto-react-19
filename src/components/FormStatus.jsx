import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function FormStatus() {
  const handleAddUser = async (prevState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    const user = {
      name,
      email
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const updatedUsers = [...(prevState || []), user];

    return updatedUsers;
  }

  const [users, addUser] = useActionState(handleAddUser, null);

  return (
    <div>
      <form action={addUser}>
        <div>
          <input name="name" placeholder="Nome" required />
        </div>
        <div>
          <input name="email" type="email" placeholder="Email" required />
        </div>
        <SubmitButton />
      </form>

      <h3>Usuários Adicionados:</h3>
      <ul>
        {users && <div>{
          users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))
        }</div>}
      </ul>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Cadastrando..." : "Cadastrar Usuário"}
    </button>
  )
}

export default FormStatus;
