import {
    Card,
    CardContent,
    CardDescription,
    
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Client } from "@/types/clients"


  export const ClientDetailCard = ({ client } : { client: Client})=>{


    return (


        <Card>
            <CardHeader>
                <CardTitle>{client.clientName}</CardTitle>
                <CardDescription>{client.billingAddress}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul>
                    <li>{client.liable}</li>
                    <li>{client.email}</li>
                    <li>{client.phone}</li>
                </ul>
                
                
            </CardContent>
           
        </Card>
    )
  }