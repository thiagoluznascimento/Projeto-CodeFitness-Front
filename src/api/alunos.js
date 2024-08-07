import axios from "axios";

export async function getAlunos(params) {
    const response = await axios.get("http://localhost:3000/alunos");
    return response.data;
}

export async function addAlunos(data) {
    const response = await axios.post("http://localhost:3000/alunos", data);
    return response.data;
}