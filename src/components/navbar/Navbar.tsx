function Navbar() {
  return (
    <div className="bg-min-bg h-16 font-grotesk flex justify-center items-center text-indigo-100 border-b">
      <div className="container justify-between flex flex-row">
        <div className="flex gap-2 hover:text-white">
          <img src="./src/assets/bcio.svg"  alt="Icone Blockchain" />
          <h1 className="text-2xl">Crypto Insights</h1>
        </div>
        <div className="flex gap-10 ">
          <a href="" className="hover:text-white">Dashboard</a>
          <a href="" className="hover:text-white"> Markets</a>
          <a href="" className="hover:text-white">Assets</a>
          <a href="" className="hover:text-white">News</a>
          <a href="" className="hover:text-white">Community</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
