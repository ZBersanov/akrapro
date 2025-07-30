import { Play } from "next/font/google";
import "./globals.css";

const play = Play({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-play",
  display: "swap",
});

export const metadata = {
  title: "Akrapro",
  description: "Детейлинг",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${play.variable} antialiased`}>{children}</body>
    </html>
  );
}
