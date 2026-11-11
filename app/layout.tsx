import "@/app/globals.css";
import type{RootLayoutProps} from "@/app/types/index.ts"
import Navbar from "@/app/components/Navbar"
import {Lato,Nunito_Sans} from "next/font/google"

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: "100"
})
const nunito = Nunito_Sans({
  subsets:['latin'],
  display:'swap',
  variable: '--font-nunito-sans'
})
export default function RootLayout({children}:RootLayoutProps) {
  return ( 
    <html lang="en" className={lato.variable}>
      <body
        className={`${nunito.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
