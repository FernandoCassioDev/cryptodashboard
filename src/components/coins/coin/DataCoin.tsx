import Coin from "../../../models/Coin";

interface CoinProps {
  coin: Coin;
}

function DataCoin({ coin }: CoinProps) {
  const coinPriceInUSD = new Intl.NumberFormat().format(
    coin.price_usd
  );

  return (
    <>
      <div className="flex min-w-full justify-between items-center border-b border-gray-500 min-h-14 font-semibold px-4 md:px-8">
        <span className="w-20 text-sm md:w-32 flex flex-row justify-center">
          {coin.name}
        </span>
        {/* arrumar formatação do preço para telas menores */}
        <span className="w-20 text-sm md:w-32 flex flex-row justify-center">
          {coinPriceInUSD}
        </span>
        <span className="hidden text-sm w-20 md:flex flex-row justify-center md:w-32">
          {coin.volume_1day_usd}
        </span>
      </div>
    </>
  );
}

export default DataCoin;
