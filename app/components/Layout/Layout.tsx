import { Suspense, memo, useEffect } from "react";
// import Footer from "../Footer";
import Header from "../Header";
import { Ysabeau_Font } from "../Common/Fonts";
import framesxTheme from "./theme";
import { CssVarsProvider } from "@mui/joy";

  
  const Layout = () => {
    
    return (
      <>
      
      <CssVarsProvider defaultMode="system" theme={framesxTheme}>
        <Suspense fallback={<h1>loadinge</h1>}>
          <Header />
        </Suspense>
        <main
          className={`${Ysabeau_Font.className} ${Ysabeau_Font.variable} max-w-screen-xl m-auto`}
        >
    
        </main>
       
      </CssVarsProvider>
    </>
  );
};
export default memo(Layout);
