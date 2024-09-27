function Home() {
  return (
    <div className="font-grotesk min-h-screen bg-min-bg pt-8 text-indigo-100 flex flex-col items-center">
      <div className="container flex justify-center">
        <h1 className="font-semibold text-3xl">Dashboard</h1>
      </div>
      <div className="container border border-gray-500 flex justify-center flex-col items-center mt-5 max-w-[55%] rounded-2xl">
        <div className="flex flex-row justify-between items-center bg-[#212121] min-w-full border-b border-gray-500 min-h-9 font-semibold px-8 rounded-t-2xl">
          <span className="w-32 flex flex-row justify-center">Asset</span>
          <span className="w-32 flex flex-row justify-center">Price</span>
          <span className="w-32 flex flex-row justify-center">Market Cap</span>
          <span className="w-32 flex flex-row justify-center">Volume 24H</span>
          <span className="w-32 flex flex-row justify-center">Change 24H</span>
        </div>
        <div className="flex flex-row justify-between items-center min-w-full border-b border-gray-500 min-h-14 font-semibold px-8">
          <span className="w-32 flex flex-row justify-center">Bitcoin</span>
          <span className="w-32 flex flex-row justify-center">90.000</span>
          <span className="w-32 flex flex-row justify-center">50B</span>
          <span className="w-32 flex flex-row justify-center">80B</span>
          <span className="w-32 flex flex-row justify-center">50M</span>
        </div>
        <div className="flex flex-row justify-between items-center min-w-full min-h-14 font-semibold px-8">
          <span className="w-32 flex flex-row justify-center">Ethereum</span>
          <span className="w-32 flex flex-row justify-center">$2,500</span>
          <span className="w-32 flex flex-row justify-center">$250B</span>
          <span className="w-32 flex flex-row justify-center">$20B</span>
          <span className="w-32 flex flex-row justify-center">+3%</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
