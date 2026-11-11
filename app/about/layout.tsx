import type { ReactNode } from "react"
import AboutFooter from "../components/AboutFooter"
export default function ModelsLayout({ children }: { children: ReactNode }) {

  return (
    <div>
    {children}
    <AboutFooter/>
    </div>
  )
}