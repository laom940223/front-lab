


export type Client = {

    id: number,
    clientName: string, 
    
    liable: string, 
    phone: string,
    email:string,
    billingAddress : string

    sampleSites?: SampleSite[]

}



export type SampleSite = {
    id: number,
    name: string, 
    sampleIds : SampleIdentification[]
}


export type SampleIdentification = {

    id: number,
    name:string,
    lat: string,
    lon: string,
    siralab : boolean,
    obsolete: boolean
}



