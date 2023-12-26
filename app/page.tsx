import { CssVarsProvider } from "@mui/joy"
import dynamic from "next/dynamic"
import framesxTheme from "./components/Layout/theme"
const Header = dynamic(()=>import("@/app/components/Header/Header"))
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      
      <CssVarsProvider defaultMode="system" theme={framesxTheme}>

      <Header/>
      </CssVarsProvider>

    </main>
  )
}
