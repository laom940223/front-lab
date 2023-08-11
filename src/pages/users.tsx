import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/my-components/data-table"
import { User, usersData } from "@/types/user"

import { ColumnDef } from "@tanstack/react-table"
import { Eye as DetailIcon, Trash } from "lucide-react"
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
import { AddUserForm } from "@/my-components/add-user-form"


export const columns: ColumnDef<User>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },

    {
        accessorKey:"name",
        header:"Name"
    },

    {
        accessorKey:"username",
        header:"Username"
    },

    {
        accessorKey:"role",
        header:"Role"
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          
            console.log(row.original.id)
     
          return (
            <div className="flex items-center">

                <Link to={`/users/${row.original.id}`}>
                    <Button variant={"ghost"} size={"sm"}> <DetailIcon/></Button>
                </Link>

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

export const Users = ()=>{


    return (
    
    <div className="w-full flex flex-wrap flex-row">

        <div className="w-full flex flex-col items-end">
            <h1 className=" pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Users
            </h1>
            <Sheet>
            <SheetTrigger> <Button variant={"default"}  className="max-w-xs" >Add User</Button> </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Add a new user</SheetTitle>
                <SheetDescription>
                    <AddUserForm/>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
                

        </div>

        <div className="bg-background w-full">
            <DataTable columns={columns} data={usersData} />
        </div>


        

    </div>)


}