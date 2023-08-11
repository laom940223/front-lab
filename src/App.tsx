import  { Routes, Route } from "react-router-dom"
import { Login } from "./pages/login"

import { Dashboard } from "./pages/dashboard"
import { Layout } from "./my-components/layout"
import { Users } from "./pages/users"




function App() {
  



  // console.log("app")

  return (
    <Routes>


        <Route path="/" element={<Layout/>}>
            <Route  path=""  element={<Dashboard/>}/>
            <Route  path="/users"  element={<Users/>}/>

        </Route>

        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<> Not Found</>} />    
    
    </Routes>


  )
}

export default App
