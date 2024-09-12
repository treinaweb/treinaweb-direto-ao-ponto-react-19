import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";

function FormStatusOptimistic() {
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

  const [users, addUser] = useActionState(handleAddUser, []);

  const [optimisticUsers, addUserOptimistic] = useOptimistic(users, (prevState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    return [...(prevState || []), {name, email}];
  })

  return (
    <div>
      <form action={(formData) => {
        addUserOptimistic(formData);
        addUser(formData);
      }}>
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
        {optimisticUsers.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} {index >= users.length && <em>(enviando...)</em>}
          </li>
        ))}
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

export default FormStatusOptimistic;
