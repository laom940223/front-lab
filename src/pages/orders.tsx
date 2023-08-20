import { Button } from "@/components/ui/button"
import { DataTable, FilterProps } from "@/my-components/data-table"
import { Order, ordersSample } from "@/types/orders"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Link } from "react-router-dom"



export const Orders = ()=>{


    const columns: ColumnDef<Order>[] = [
        {
          accessorKey: "id",
          header: "Id",
        },
    
        {
            accessorKey:"invoice",
            header: ({ column }) => {
                return (
                  <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                  >
                    Invoice
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                )
              },
        },
    
        {
            accessorKey:"receptionDate",
            header:"Reception Date",
            cell:({row})=>{

                return  row.original.receptionDate.toLocaleDateString() + " "  + row.original.receptionDate.toLocaleTimeString()
            }
        },
    
        {
            accessorKey:"client",
            header:"Client",
            cell:({ row })=>{
                return row.original.client.clientName
            }
        },

        {
            accessorKey:"cesavedac",
            header:"CESAVEDAC"
        },

        {
            accessorKey:"supervise",
            header:"Supervise"
        },

        {
            accessorKey:"hc",
            header:"H.C."
        },

        {
            accessorKey:"cc",
            header:"C.C."
        },

        {
            accessorKey:"draft",
            header:"Draft"
        },

        {

            accessorKey:"analistResultDate",
            header:"Analist Result Date",
            cell:({row})=>{

                return row.original.analistResultDate.toLocaleDateString()
            }

        },

        {

            accessorKey:"clientResultDate",
            header:"Client Result Date",
            cell:({row})=>{
                return row.original.analistResultDate.toLocaleDateString()
            }
        },

        { 

            accessorKey:"delivered",
            header:"Delivered"

        }

      ]

      
      const filters : FilterProps[] =[

        {
            accessor:"invoice",
            placeholder:"Invoice"
        },

        
      ] 

    
    return(
         <div>
            <div className="border-b pb-4">
                <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-2    ">
                Orders
                </h2>

                <Link  to={"/orders/new"}>
                    <Button>
                        Add Order
                    </Button>
                </Link>
            </div>


            <div>
                <DataTable columns={columns} data={ordersSample} filters={filters}  />

            </div>
            
        </div>
        )
}