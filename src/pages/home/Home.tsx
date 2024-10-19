import { useState, useEffect } from "react";
import Coin from "../../models/Coin";
import { buscar } from "../../service/Service";
import { ToastAlert } from "../../utils/ToastAlert";
import { MagnifyingGlass } from "react-loader-spinner";
import DataCoin from "../../components/coins/coin/DataCoin";

function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [visibleCoins, setVisibleCoins] = useState<number>(25);

  async function buscarCoins() {
    try {
      await buscar("/cryptos", setCoins, {
        headers: {
          "X-CoinAPI-Key": "E545835B-8705-419C-A8B1-43C3EAC8BC80",
        },
      });
    } catch (error: any) {
      if (error.toString().includes("429")) {
        ToastAlert("Foi execedido o limite de requisições", "erro");
      }
    }
  }

  useEffect(() => {
    buscarCoins();
  }, [coins.length]);

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
      <div className="container border border-gray-500 flex flex-col items-center mt-5 max-w-[80vw] sm:max-w-[90%] md:max-w-[60%] rounded-2xl min-h-[80vh]">
        <div className="flex flex-row justify-between items-center bg-[#212121] w-full border-b border-gray-500 min-h-9 font-semibold px-4 md:px-8 rounded-t-2xl">
          <span className="w-20 md:w-32 flex flex-row justify-center">
            Asset
          </span>
          <span className="w-20 md:w-32 flex flex-row justify-center">
            Price
          </span>
          <span className="w-20 md:w-32 flex flex-row justify-center">
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
          <div className="mt-4">
            <button
              onClick={loadMoreCoins}
              className="bg-black text-white py-2 px-4 rounded-md"
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
