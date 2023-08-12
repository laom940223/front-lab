



import { Button } from "@/components/ui/button"
import { DataTable, FilterProps } from "@/my-components/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Eye as DetailIcon, Trash, Pencil } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DialogHeader } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"

import {
    Sheet,
    
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    
  } from "@/components/ui/sheet"


import { Client } from "@/types/clients"
import { AddClientForm } from "@/my-components/clients/add-client-form"
import { useState } from "react"
import { Link } from "react-router-dom"


export const clientsData = [
    {
        id:1,
        clientName:"360 Parque Industrial S.A.P.I. de C.V.",
        email:"industrialParq@gmail.com",
        liable:"Agustin Cazares",
        phone:"6182568545",
        sampleSite:"Carretera Trinidad Narro Mass 8000, Saltillo, Coahuila",
        billingAddress:"Billing Addreess"

    },
     {
        id:2,
        clientName:"Abraham Flores Valenzuela",
        email:"industrialParq@gmail.com",
        liable:"Agustin Cazares",
        phone:"6182568545",
        sampleSite:"Caseta de peaje Cuencam� km 143 + 700, Cuencam� de Ceniceros, Durango, CP: 35800"

    },

     {
        id:3,
        clientName:"Agronegocios Las Carolinas S.P.R de R.L",
        email:"industrialParq@gmail.com",
        liable:"Agustin Cazares",
        phone:"6182568545",
        sampleSite:"Sin numero, s/n Nixtalpa, Durango, C.P 34850"

    },
     {
        id:4,
        clientName:"360 Parque Industrial S.A.P.I. de C.V.",
        email:"industrialParq@gmail.com",
        liable:"Agustin Cazares",
        phone:"6182568545",
        sampleSite:"Sin numero, s/n Nixtalpa, Durango, C.P 34850"

    }

] as Client[]


export const Clients = ()=>{

    const [clients, setClients ] = useState<Client[]>(clientsData)
    const [openAdd, setOpenAdd] = useState(false)


    
 const columns: ColumnDef<Client>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },

    {
        accessorKey:"clientName",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },

    {
        accessorKey:"sampleSite",
        header:"Sample Site"
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          
            
     
          return (
            <div className="flex items-center">


                <Link to={`/users/${row.original.id}`}>
                    <Button variant={"ghost"} size={"sm"} ><DetailIcon/></Button>
                </Link>
                
                <Sheet>
                <SheetTrigger> <Button variant={"ghost"} size={"sm"}> <Pencil/></Button></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Edit Client</SheetTitle>
                    <SheetDescription>
                        <AddClientForm onClose={handleCloseAdd} addClient={handleAddClient} clientEdit={row.original} />
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>


                <Dialog >
                    <DialogTrigger >
                        <Button variant={"ghost"} size={"sm"} className="text-red-400"> <Trash/></Button>
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
                            <Button variant={"destructive"} >Delete</Button>
                            <DialogClose><Button variant={"default"} >Cancel</Button></DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>


                
            </div>
            
          )
        },
      },
  ]

    const handleCloseAdd =()=>{ 
        setOpenAdd(false)
    }


    const handleAddClient = (client: Client)=>{
        setClients(prev=> [client,...prev])
    }





    const filters = [
        {
            accessor:"clientName",
            placeholder:"Filter by Name"

         },

         {
            accessor:"sampleSite",
            placeholder:"Filter By Sample Site"
         }
    ] as FilterProps[];


    

    return (
    
    <div className="w-full flex flex-wrap flex-row">

        <div className="w-full flex flex-col items-end pr-4">
            <h1 className=" pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Clients
            </h1>
            <Sheet   open={openAdd} onOpenChange={setOpenAdd}  >
            <SheetTrigger > <Button variant={"default"}  className="max-w-xs mb-4" >Add Client</Button> </SheetTrigger>
            
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Add a new client</SheetTitle>
                <SheetDescription>
                    <AddClientForm onClose={handleCloseAdd} addClient ={handleAddClient}/>
                </SheetDescription>
                </SheetHeader>
                
            </SheetContent>
            </Sheet>
                

        </div>

        <div className="bg-background w-full">
            <DataTable filters={filters} columns={columns} data={clients} />
        </div>


        

    </div>)


}