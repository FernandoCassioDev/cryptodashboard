import Coin from "../../../models/Coin";


interface CoinProps {
  coin: Coin;
}

function DataCoin({ coin }: CoinProps) {
  return (
    <>
      <div className="flex flex-row justify-between items-center min-w-full border-b border-gray-500 min-h-14 font-semibold px-8">
        <span className="w-32 flex flex-row justify-center">{coin.name}</span>
        <span className="w-32 flex flex-row justify-center">{coin.price_usd.toFixed(3)}</span>
        <span className="w-32 flex flex-row justify-center">50B</span>
        <span className="w-32 flex flex-row justify-center">{coin.volume_1day_usd}</span>
        <span className="w-32 flex flex-row justify-center">50M</span>
      </div>
    </>
  );
}

export default DataCoin;
