import "./globals.css";
import type { RootLayoutProps } from "@/app/types"
import { Nunito_Sans, Lato } from "next/font/google"
import Navbar from "@/app/components/Navbar"

const albertSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap"
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${lato.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
