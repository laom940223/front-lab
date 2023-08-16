import { SampleIdentification, SampleSite } from "@/types/clients"

import {  useOutletContext, useParams } from "react-router-dom"
import { DataTable } from "../data-table"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AddEditSample } from "./add-edit-sample"
import { useState } from "react"
import { AddEditSamleIdentification } from "./add-edit-sample-identification"





export function SampleCard(){

    const [addSite, setAddSite] = useState(false)
    const {id, sampleId} = useParams()

    const { sampleSites } = useOutletContext<{sampleSites :SampleSite[]}>()

    const handleOnCloseSample = ()=> {

        setAddSite(false)
    }
    
    
    const data = sampleSites.filter( site => {
        
        console.log(`IDs : ${site.id}  ${sampleId}`)
        // console.log(site.id === +!sampleId)
        

        return    site.id === +sampleId!
    
    })[0]



  
 
    
 const columns: ColumnDef<SampleIdentification>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },

    {
        accessorKey:"name",
        header: "Name"
    },

    {
       accessorKey:"lat",
       header:"Latitude" 
    },

    {
        accessorKey:"lon",
        header:"Longitude" 
     },

     {
        accessorKey:"siralab",
        header:"SIRALAB", 
        cell: (data)=>{

            return  data.row.original.siralab ? "Yes" : "No"
        }
     },

     {

        accessorKey:"obsolete",
        header:"Obsolete",
        cell: (data)=>{

            return  data.row.original.obsolete ? "Yes" : "No"
        }
     },


    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          
            
     
          return (
            <div className="flex items-center">


               
                
                <Sheet>
                <SheetTrigger> <Button variant={"ghost"} size={"sm"}> E</Button></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Edit Client</SheetTitle>
                    <SheetDescription>
                        To Do
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>



                <Sheet>
                <SheetTrigger> <Button variant={"ghost"} size={"sm"} className="text-red-400"> Del</Button></SheetTrigger>
                <SheetContent side={"top"}>
                    <SheetHeader>
                    <SheetTitle>Delete Client</SheetTitle>
                    <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                    </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                            <Button variant={"destructive"} >Delete</Button>
                            <SheetClose><Button variant={"default"} >Cancel</Button></SheetClose>
                    </SheetFooter>
                            
                </SheetContent>
                
                </Sheet>


                {/* <Dialog modal >
                    <DialogTrigger >
                        
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle className="text-red-800">Are you sure absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                           
                        </DialogFooter>
                    </DialogContent>
                </Dialog> */}


                
            </div>
            
          )
        },
      },
  ]

    

    return (

        <div className="w-full flex flex-wrap">
            
            <div className="w-full flex flex-col items-end mb-3 flex-wrap">
                
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    {data.name}
                </h4>

                <div className="flex w-full justify-end  ">
                    <Sheet open={addSite} onOpenChange={setAddSite}>
                        <SheetTrigger>  <Button  variant={"secondary"}>Edit </Button></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                            <SheetTitle>Edit Sample Site</SheetTitle>
                            
                                <AddEditSample sampleEdit={data}  onClose={handleOnCloseSample} />
                            
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                    <SheetTrigger> <Button variant={"ghost"} size={"sm"} className="text-red-400 ml-2"> Del</Button></SheetTrigger>
                    <SheetContent side={"top"}>
                        <SheetHeader>
                        <SheetTitle>Delete sample site</SheetTitle>
                        <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                        </SheetDescription>
                        </SheetHeader>
                        <SheetFooter>
                                <Button variant={"destructive"} >Delete</Button>
                                <SheetClose><Button variant={"default"} >Cancel</Button></SheetClose>
                        </SheetFooter>
                                
                    </SheetContent>
                    
                    </Sheet>
                </div>

            </div>
            <div className="w-full mb-4">
                    <DataTable  columns={columns} data={data.sampleIds} />
            </div>

            <div className="w-full flex justify-end"> 

                <Sheet open={addSite} onOpenChange={setAddSite} >
                    <SheetTrigger>  <Button  variant={"secondary"}>Add Identificaion </Button></SheetTrigger>
                    <SheetContent className=" lg:w-[900px]">
                        <SheetHeader>
                        <SheetTitle>Add Identification</SheetTitle>
                        
                            <AddEditSamleIdentification />
                        
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    )
}