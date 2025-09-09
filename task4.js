// Task 4: delUser(number)
const { getServerURL } = require("./server.js");

async function delUser(id) {
  try {
    const response = await fetch(`${getServerURL()}/users/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      console.log(` Usuario con ID ${id} eliminado correctamente.`);
    } else {
      console.log(` No se pudo eliminar el usuario con ID ${id}.`);
    }
  } catch (error) {
    console.error(" Error al eliminar usuario:", error);
  }
}

module.exports = { delUser };

