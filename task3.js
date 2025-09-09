// Task 3: addUser(first_name, last_name, email)
const { getServerURL } = require("./server.js");

async function addUser(firstName, lastName, email) {
  try {
    // 1. Obtener la lista actual de usuarios
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();

    // 2. Calcular el nuevo ID secuencial
    const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
    const newId = maxId + 1;

    // 3. Crear el nuevo usuario
    const newUser = {
      id: newId,
      Nombre: firstName,
      Apellido: lastName,
      email: email
    };

    // 4. Hacer POST al servidor
    const postResponse = await fetch(`${getServerURL()}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    const result = await postResponse.json();
    console.log("Usuario agregado:", result);

  } catch (error) {
    console.error("Error al agregar usuario:", error);
  }
}

module.exports = { addUser };

