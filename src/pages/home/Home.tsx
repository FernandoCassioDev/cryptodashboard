import { useEffect, useState } from "react";
import Coin from "../../models/Coin";

import { MagnifyingGlass } from "react-loader-spinner";
import DataCoin from "../../components/coins/coin/DataCoin";
import { GET } from "../../service/Service";
import { ToastAlert } from "../../utils/ToastAlert";

//Busca as criptomoedas
function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [visibleCoins, setVisibleCoins] = useState<number>(25);

  //faz a requisição para o backend
  async function findCoins() {
    try {
      await GET("/cryptos", setCoins, {
        headers: {
          "X-CoinAPI-Key": "95d877fd-d259-4be1-8a2e-53416e58bda1",
        },
      });

      //Armazena o timestamp da última requisição no localstorage
      localStorage.setItem("lastRequest", Date.now().toString());
    } catch (error: any) {
      if (error.toString().includes("429")) {
        ToastAlert("Foi execedido o limite de requisições", "erro");
      }
    }
  }

  //Função que verifica o tempo de requisição e, se necessário, faz a requisição novamente
  const checkRequestInterval = () => {
    const lastRequest = localStorage.getItem("lastRequest");
    const now = Date.now();

    //Se não tiver timestamp, considera que passou tempo suficiente
    const timePast = lastRequest ? now - parseInt(lastRequest) : 900001;

    //Só faz a requisição se passou 15 minutos (900.000ms)
    if (timePast >= 900000) {
      findCoins();
    }
  };

  //Configura um intervalo para realizar as requisições a cada 15 minutos
  useEffect(() => {
    checkRequestInterval(); //verifica ao recarregar a página

    const interval = setInterval(() => {
      checkRequestInterval();
    }, 900000); // 15 minutos

    //Limpa o intervalo quando o componente e desmontado
    return () => clearInterval(interval);
  }, []);

  //Função para carregar mais moedas
  const loadMoreCoins = () => {
    //Aumenta a quantidade de moedas renderizadas
    setVisibleCoins((prevVisibleCoins) => prevVisibleCoins + 25);
  };

  return (
    <div className="font-grotesk bg-min-bg pt-8 text-indigo-100 flex flex-col items-center min-h-screen">
      <div className="container flex justify-center">
        <h1 className="font-semibold text-3xl">Dashboard</h1>
      </div>
      <div className="container border border-gray-500 flex flex-col items-center mt-5 max-w-[80vw] sm:max-w-[90%] md:max-w-[60%] rounded-2xl min-h-[80vh] mb-20">
        <div className="flex flex-row justify-between items-center bg-[#212121] w-full border-b border-gray-500 min-h-9 font-semibold px-4 md:px-8 rounded-t-2xl">
          <span className="w-20 md:w-32 flex flex-row justify-center">
            Asset
          </span>
          <span className="w-20 md:w-32 flex flex-row justify-center">
            Price
          </span>
          <span className="hidden w-20 md:w-32 md:flex flex-row justify-center">
            Volume 24H
          </span>
        </div>

        {/* Loader */}
        {coins.length === 0 && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#000"
          />
        )}

        {/* Lista Moedas */}
        <div className="container">
          {coins.slice(0, visibleCoins).map((coin) => (
            <DataCoin key={coin.id_icon} coin={coin} />
          ))}
        </div>

        {/* Botão para carregar mais moedas */}
        {visibleCoins < coins.length && (
          <div className="flex min-h-14">
            <button
              onClick={loadMoreCoins}
              className="flex items-center bg-black text-white my-2 px-2 rounded-md transition-all hover:duration-1000 hover:bg-slate-900 active:bg-slate-400 active:duration-0"
            >
              Carregar mais moedas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
