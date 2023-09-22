import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Archivo } from "next/font/google";

import localFont from "next/font/local";
import Script from "next/script";

const helvetica = localFont({
  src: "../../public/fonts/helvetica.otf",
  variable: "--helvetica",
});

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const archivo = Archivo({ subsets: ["latin"], variable: "--archivo" });
const inter = Inter({ subsets: ["latin"], variable: "--Inter" });

export const metadata = {
  title: "KLOUT PWR - FREE PUMP KAPS ",
  description:
    "Limited time only! Get FREE Pump Kaps, when you buy any pre-workout!",
  themeColor: "black",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${montserrat.variable} ${inter.variable} ${helvetica.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
