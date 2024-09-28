import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const buscar = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  const response = await api.get(url, header);
  setDados(response.data); 
};
