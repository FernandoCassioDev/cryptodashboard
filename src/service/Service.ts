import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  //arrumar o endereço assim que subir em produção
});

export const GET = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  const response = await api.get(url, header);
  setDados(response.data);
};
