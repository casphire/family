
import SecondPage from "./routing/SecondPage"
import FirstPage from "./routing/FirstPage"
import FourthPage from "./routing/FourthPage"
import ThirdPage from "./routing/ThirdPage"
import { Routes,Route } from "react-router-dom"
import NavBar from "./routing/NavBar"
import "./NavBar.css"
function App() {

  return (
    <> 
       <Routes>
        <Route path="/abc" element ={<FirstPage/>} />       
        <Route path="/xyz" element={<SecondPage/>} />
        <Route path="/pra" element ={<FourthPage/>} />   
        <Route path="/din" element ={<ThirdPage/>} />    
        </Routes> 
        <NavBar/>

    </>
  )
}

export default App
