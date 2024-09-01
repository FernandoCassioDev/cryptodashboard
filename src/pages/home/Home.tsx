function Home() {
  return (
    <div className="font-grotesk min-h-screen bg-min-bg pt-8 text-indigo-100 flex flex-col items-center">
      <div className="container flex justify-center">
        <h1 className="font-semibold text-3xl">Dashboard</h1>
      </div>
      <div className="container border border-gray-500 flex justify-center flex-col items-center mt-5 max-w-[55%] rounded-2xl">
        <div className="flex flex-row justify-between items-center bg-[#212121] min-w-full border-b border-gray-500 min-h-9 font-semibold px-16 rounded-t-2xl">
          <span>Asset</span>
          <span>Price</span>
          <span>Market Cap</span>
          <span>Volume 24H</span>
          <span>Change 24H</span>
        </div>
        <div className="flex flex-row items-center min-w-full border-b border-gray-500 min-h-14 font-semibold pl-16 pr-24">
          <span>Bitcoin</span>
          <span className="ml-32">$40,000</span>
          <span className="ml-32">$750B</span>
          <span className="ml-44">$30B</span>
          <span className="ml-48">+2%</span>
        </div>
        <div className="flex flex-row items-center min-w-full min-h-14 font-semibold pl-16 pr-24">
          <span>Ethereum</span>
          <span className="ml-32">$2,500</span>
          <span className="ml-32">$250B</span>
          <span className="ml-44">$20B</span>
          <span className="ml-48">+3%</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
