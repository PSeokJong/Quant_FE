export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen w-full">
      <section className="min-h-screen flex items-center justify-center relative w-full overflow-hidden h-full ">
        <video
          className="absolute top-0 left-0 object-cover bg-white w-[101vw] h-[101vh] translate-z-0 filter brightness-100 contrast-100 focus:outline-none will-change-transform"
          src="/video/Klab.mp4"
          autoPlay
          muted
          playsInline
        />
        <a href="https://t.me/hypurrqauntannouncement">
          <button className="absolute top-[67%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-black text-white font-bold rounded-[30px] flex items-center space-x-3">
            <img
              src="/icon/telegram.png"
              alt="Telegram Icon"
              className="w-6 h-6 invert"
            />
            <span className="whitespace-nowrap text-sm md:text-base">
              Get Started
            </span>
          </button>
        </a>
      </section>
      <section className="flex flex-col items-center justify-center max-w-[720px] mx-10 ">
        <div className="w-full flex flex-col items-start">
          <h2 className="font-bold text-[40px] leading-[55px] font-sans tracking-[0px] text-left">
            Quant
          </h2>
          <p className="text-[15px] leading-[25px] text-[#707070] mt-8 md:mt-1.5 text-left max-w-[600px]">
            Powered by AI & Big Data and seamless Telegram integration,
          </p>
          <p className="text-[15px] leading-[25px] text-[#707070] text-left max-w-[600px]">
            HypurrQuant delivers real-time market analysis and Quant investment
            strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 my-24 max-w-[1000px] w-full">
          <div className="flex justify-center">
            <img
              src="/block/buyback.png"
              alt="AI & Big Data Quant"
              className="w-full max-w-[200px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/block/telegram.png"
              alt="Buyback & Burn"
              className="w-full max-w-[200px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/block/ai.png"
              alt="Telegram Integration"
              className="w-full max-w-[200px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/block/low fee.png"
              alt="Low Fees"
              className="w-full max-w-[200px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
