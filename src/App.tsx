import  { Routes, Route } from "react-router-dom"
import { Login } from "./pages/login"

import { Dashboard } from "./pages/dashboard"
import { Layout } from "./my-components/layout"
import { Users } from "./pages/users"
import { Clients } from "./pages/clients"




function App() {
  



  // console.log("app")

  return (
    <Routes>


        <Route path="/" element={<Layout/>}>
            <Route  path=""  element={<Dashboard/>}/>
            <Route  path="/users"  element={<Users/>}/>
            <Route path="/clients" element={<Clients/>} />
            <Route path="*" element={<> Not Found</>} />  
        </Route>

        <Route path="/login" element={<Login/>} />

        
    
    </Routes>


  )
}

export default App
