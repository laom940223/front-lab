import  { Routes, Route } from "react-router-dom"
import { Login } from "./pages/login"

import { Dashboard } from "./pages/dashboard"
import { Layout } from "./my-components/layout"
import { Users } from "./pages/users"
import { Clients } from "./pages/clients"
import { NotFound } from "./pages/not-found"
import { ClientDetail } from "./pages/client-detail"
import { SampleCard } from "./my-components/samples/sample-card"




function App() {
  



  // console.log("app")

  return (
    <Routes>


        <Route path="/" element={<Layout/>}>

            <Route  path=""  element={<Dashboard/>}/>
            <Route  path="/users"  element={<Users/>}/>

            <Route path="/clients"  >
                <Route path="" element={<Clients/>}/>
                <Route path="/clients/:id" element={<ClientDetail/>}>
                    <Route path="/clients/:id/sample/:sampleId" element={<SampleCard/>} /> 
                </Route>
            </Route>
            
            <Route path="*" element={<NotFound/>} />  
        </Route>

        <Route path="/login" element={<Login/>} />

        
    
    </Routes>


  )
}

export default App
