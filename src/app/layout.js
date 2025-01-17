import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quant",
  description: "Generated by create next app",
  icons: {
    icon: "/icon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon/favicon.ico" />

      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
