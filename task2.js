// Task 2: listUsers()
const { getServerURL } = require("./server.js");

async function listUsers() {
  try {
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

module.exports = { listUsers };
