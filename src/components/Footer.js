function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 pt-12 min-h-[300px] mx-10 mb-20 md:mb-0">
      <div className="container px-4 max-w-[800px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Product Section */}
          <div className="flex flex-col">
            <h4 className="font-bold text-sm text-gray-800">Product</h4>
            <ul className="space-y-2 mt-5 md:mt-10">
              <li>
                <a
                  href="https://gitbook.hypurrquant.com/"
                  className="text-black text-opacity-50 hover:text-opacity-100"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="flex flex-col ">
            <h4 className="font-bold text-sm text-gray-800">Community</h4>
            <ul className="space-y-2 mt-5 md:mt-10">
              <li className="">
                <a
                  href="https://x.com/hypurrquant"
                  className="text-black text-opacity-50 hover:text-opacity-100"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/HuC6zt2S"
                  className="text-black text-opacity-50 hover:text-opacity-100"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/hypurrqauntannouncement"
                  className="text-black text-opacity-50 hover:text-opacity-100"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Trading Section */}
          <div className="flex flex-col">
            <h4 className="font-bold text-sm text-gray-800">Trading</h4>
            <ul className="space-y-2 mt-5 md:mt-10">
              <li>
                <a
                  href="https://app.hypurr.fun/launch/2302"
                  className="text-black text-opacity-50 hover:text-opacity-100"
                >
                  Hypurr.fun
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
