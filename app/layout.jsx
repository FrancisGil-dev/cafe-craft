import { Montserrat, } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['100', '300', '500', '700', '900'] });

export const metadata = {
  title: "CaféCraft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#FEFAF6]`}>{children}</body>
    </html>
  );
}
