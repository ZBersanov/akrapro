import { Onest } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Contacts from "../components/Contacts";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata = {
  title: "Akrapro",
  description: "Детейлинг",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} antialiased`}>
        <Header />
        {children}
        <Contacts />
      </body>
    </html>
  );
}
