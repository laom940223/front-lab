import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ClientDetailCard } from "@/my-components/clients/client-details-card"

import { AddEditSample } from "@/my-components/samples/add-edit-sample"
import { Client } from "@/types/clients"

import { useState } from "react"

import { Link, Outlet, useLocation, useParams } from "react-router-dom"



const defaultClient: Client = {

    id:58,
    clientName:"Test Client detail",
    billingAddress:"Test Address for this client",
    email:"test@Test.com",
    liable:"Ing. Raymundo Escalante",
    phone:"6182456558",

    sampleSites:[
        {
            id:1,
            name:"Carretera Trinidad Narro Mass, Saltillo Coahuila",
            sampleIds:[
                
                {    
                    id: 23,
                    lat:"latitude",
                    lon:"longitude",
                    name:"Descarga ",
                    obsolete:false,
                    siralab:false
                },
                {    
                    id: 234,
                    lat:"latitude",
                    lon:"longitude",
                    name:"EEE drenaje",
                    obsolete:false,
                    siralab:false
                },
                {    
                    id:332,
                    lat:"latitude",
                    lon:"longitude",
                    name:"Descarga final drenaje",
                    obsolete:false,
                    siralab:false
                },


            ]
        },


        {
            id:58,
            name:"Carretera Mezquital Km 25 ",
            sampleIds:[
                
                {    
                    id: 23,
                    lat:"latitude",
                    lon:"longitude",
                    name:"Choahiasdeasd ",
                    obsolete:false,
                    siralab:false
                },
                {    
                    id: 234,
                    lat:"latitude",
                    lon:"longitude",
                    name:"KAsdeaseas",
                    obsolete:false,
                    siralab:false
                },
                {    
                    id:332,
                    lat:"latitude",
                    lon:"longitude",
                    name:"Descarga final drenaje",
                    obsolete:false,
                    siralab:false
                },


            ]
        },

    ]

}





export const ClientDetail = ()=>{

    const {id} = useParams()
    console.log(id)

    const {pathname} = useLocation()
    
  
    const [addSite, setAddSite] = useState(false)

    const handleOnCloseSample =  ()=>{

        setAddSite(false)
    }


    //es un tipo  pero puede ser una interfaz 


    const links = defaultClient.sampleSites?.map(sampleSite => (

            <li className="p-0"> 
                <Link
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "justify-start",
                        pathname === `/clients/${id}/sample/${sampleSite.id}`
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                        "justify-start"
                    )}
                    to={`/clients/${id}/sample/${sampleSite.id}`}>
                        {`${sampleSite.name}` } 
                </Link>
            </li>
    ))

    return (
        <div className="flex w-[100%] flex-wrap py-4 gap-4">
            <div>
                <Link to="/clients" > Go Back</Link>
            </div>

            <div className="w-[100%]">
                    <ClientDetailCard client={defaultClient} />
            </div>

            <div className="w-[100%]" >

                <Card>
                <CardHeader>
                    <CardTitle>Sample Sites</CardTitle>
                    <CardDescription>Sample site description</CardDescription>
                </CardHeader>
                <CardContent className="flex">
                    <div className="w-4/12">
                        <ul>
                            {links}
                        </ul>

                        <Sheet open={addSite} onOpenChange={setAddSite}>
                        <SheetTrigger>  <Button className="mt-4">Add Sample Site </Button></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                            <SheetTitle>Add Sample Site</SheetTitle>
                            
                                <AddEditSample onClose={handleOnCloseSample} />
                            
                            </SheetHeader>
                        </SheetContent>
                        </Sheet>
                        
                           


                    </div>

                    <div className="w-8/12">

                        
                        <Outlet context={{sampleSites: defaultClient.sampleSites}}/>
                        
                    </div>
                </CardContent>
            
                </Card> 
                

            </div>

        
        </div>
        )
}