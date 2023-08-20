import { clientsData } from "@/pages/clients"
import { Client, SampleSite } from "./clients"
import { User } from "./user"




export type Order = {

    id: number, 
    type: string,
    client: Client,
    invoice: string, 
    receptionDate : Date,
    desinfection: boolean,
    termometerNumber: number, 
    temperature: number,
    sampleSite: SampleSite,
    cesavedac: boolean, 
    supervise: boolean, 
    hc: boolean,
    cc: boolean,
    draft: boolean, 
    analistResultDate: Date, 
    clientResultDate: Date,
    delivered: boolean,
    sampler:User
}




export const ordersSample = [

    {
        id:25,
        invoice:"MFQ-25",
        client:clientsData[0],
        cesavedac: false,
        supervise:false,
        hc:true,
        cc:true,
        draft:false,
        receptionDate: new Date(),
        analistResultDate: new Date(),
        clientResultDate: new Date(),
        delivered:false,


    }

] as Order[]