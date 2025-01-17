export default function Header() {
  return (
    <header className="bg-fcfcfc text-black px-[31px] pt-[31px] pb-0">
      <nav>
        <ul className="flex space-x-8 items-center">
          {/* Home */}
          <li>
            <a
              href="/"
              className="font-bold text-lg leading-[24px] font-sans tracking-[0px]"
            >
              Home
            </a>
          </li>

          {/* Docs */}
          <li>
            <a
              href="https://gitbook.hypurrquant.com/"
              className="font-bold text-lg leading-[24px] font-sans tracking-[0px]"
            >
              Docs
            </a>
          </li>

          {/* Custom Icon */}
          <li>
            <a href="https://x.com/hypurrquant">
              <img src="/icon/x.png" alt="Custom Icon" className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
