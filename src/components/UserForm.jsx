import React, { useState, useEffect } from "react";

function UserForm() {
  const [users, setUsers] = useState([]);
  const [renderCount, setRenderCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleAddUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Adicionando usuário:", { name, email });

    setUsers((prev) => [...prev, { name, email }]);
    setStatusMessage("Usuário adicionado com sucesso!" + Math.random());
  }

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [users, statusMessage]);

  console.log("Renderizando componente. Contagem de renderizações:", renderCount);

  return (
    <div>
      <form action={handleAddUser}>
        <div>
          <input name="name" placeholder="Nome" required />
        </div>
        <div>
          <input name="email" type="email" placeholder="Email" required />
        </div>
        <button type="submit">Adicionar Usuário</button>
      </form>

      <h3>{statusMessage}</h3>

      <h3>Usuários Adicionados:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;