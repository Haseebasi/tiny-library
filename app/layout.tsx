import "./globals.css";
import type { RootLayoutProps } from "@/app/types"
import { Nunito_Sans, Lato } from "next/font/google"
import Navbar from "@/app/components/Navbar"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap"
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-headings"
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${nunitoSans.className} ${lato.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}