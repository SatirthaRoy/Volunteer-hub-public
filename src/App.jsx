import { Outlet } from "react-router-dom"
import Nav from "./Shared/Nav"
import Footer from "./Shared/Footer"
import { Toaster } from "react-hot-toast"
import useData from "../Utils/useData"
import { ScrollRestoration } from "react-router-dom";


function App() {
  const {dark} = useData();

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="-z-10 bg-[#f0f2f5] dark:bg-[#010a14] bg-cover bg-no-repeat fixed top-0 left-0 h-screen w-screen"></div>
      <Nav/>
      <Outlet/>
      <Footer/>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <ScrollRestoration/>
    </div>
  )
}

export default App
