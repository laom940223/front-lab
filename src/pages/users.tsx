import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/my-components/data-table"
import { User, usersData } from "@/types/user"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Eye as DetailIcon, Trash } from "lucide-react"
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
import { EditUserForm } from "@/my-components/edit-user-form"


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
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Username
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
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

                
                <Sheet>
                <SheetTrigger> <Button variant={"ghost"} size={"sm"}> <DetailIcon/></Button></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Edit User</SheetTitle>
                    <SheetDescription>
                        <EditUserForm user={row.original}/>
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