import axios from "axios";

export async function getTreinos() {
    const response = await axios.get("http://localhost:3000/treinos");
    return response.data;
}

export async function deleteTreino(id) {
    const response = await axios.delete(`http://localhost:3000/treinos/${id}`);
    return response.data;
}

export async function addTreino(data) {
    const response = await axios.post("http://localhost:3000/treinos", data);
    return response.data;
}

// Para a edição de treino
export async function getTreino(id) {
    const response = await axios.get(`http://localhost:3000/treinos/${id}`);
    return response.data;
}

export async function updateTreino(id, data) {
    const response = await axios.put(`http://localhost:3000/treinos/${id}`, data);
    return response.data;
}
