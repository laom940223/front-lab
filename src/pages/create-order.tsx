import { Button } from "@/components/ui/button"

import { Form,FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"

import { z } from "zod"

import { AutoCompleteInput } from "@/my-components/autotocomplete-input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { CalendarIcon } from "lucide-react"
import { PopoverContent } from "@/components/ui/popover"
import { format, isFuture } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"



interface CreateOrderProps extends React.HTMLAttributes<HTMLDivElement> {}


// id:25,
//         invoice:"MFQ-25",
//         client:clientsData[0],
//         cesavedac: false,
//         supervise:false,
//         hc:true,
//         cc:true,
//         draft:false,
//         receptionDate: new Date(),
//         analistResultDate: new Date(),
//         clientResultDate: new Date(),
//         delivered:false,




const createOrderSchema = z.object({
  
    invoice: z.string().min(2, {
      message: "Invoice must be at least 2 characters.",
    }),


  
    type: z.string().min(2, {
      message: "Please select a Type",
    }),

    client:  z.string(),//z.coerce.number(),
    sampleSite: z.coerce.number(),
    
    receptionDate : z.date()
          .refine((data=> !isFuture(data)), { message:"You can not select the future"})
    ,



    receptionTime: z.string().min(2, "Please provide a valid time")
          
    ,

    termometer: z.coerce.number(),
    temperature: z.coerce.number(),

    observation: z.string().optional(),

    cesavedac: z.boolean().default(false),
    desinfection: z.boolean().default(false),




  
    
  
  })
  


export const CreateOrder = ({ className, ...props }: CreateOrderProps)=>{

  


    

    const form = useForm<z.infer<typeof createOrderSchema>>({
        resolver: zodResolver(createOrderSchema),
        defaultValues: {
         
            invoice:"",
            type:"WATER",
            client:undefined,
            sampleSite: 0,
            receptionDate: new Date(),
            receptionTime: "",
            termometer:undefined,
            temperature:undefined,
            cesavedac: false,
            desinfection: false

           
        },
      })
    
     
      function onSubmit(values: z.infer<typeof createOrderSchema>) {
        

          console.log(values)

      }
    



    return (
        
        <div>
            <div>
                <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-2    ">
                    Orders
                </h2>
            </div>

            <div>
                
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          


          <div className="flex  justify-start gap-4  ">
          <FormField
            control={form.control}
            name="invoice"
            render={({field}) => (
              <FormItem className="w-1/4">
                <FormLabel>Invoice</FormLabel>
                <FormControl>
                    <Input placeholder="Invoice" {...field} />
                </FormControl>
                
                {form.formState.errors.invoice ? <FormMessage > {form.formState.errors.invoice.message}</FormMessage>: null }
              </FormItem>
            )}
          />
     

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-1/4">
              <FormLabel>Water of food?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sample types" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"WATER"}>Water</SelectItem>
                  <SelectItem value="FOOD">Food</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
        </FormItem>
         )}
         />

       

        </div>


          <div className=" flex w-full">

          <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem className=" flex flex-wrap w-2/6">
              <FormLabel className="w-full">Client</FormLabel>
                <AutoCompleteInput value={field.value} onChangeProp={(value:string)=>{field.onChange(value)}} />
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
          
          control={form.control}
          name="sampleSite"
          render={({ field }) => (
            <FormItem className="w-2/6">
              <FormLabel>Sample Site</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value.toString()} >
                <FormControl>
                  <SelectTrigger disabled={!form.getValues("client")} >
                    <SelectValue placeholder="Select sample types" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                 
                    <SelectItem value={"1"}>Water</SelectItem>
                    <SelectItem value="2">Food</SelectItem>
                    
                 
                    


                </SelectContent>
              </Select>
              <FormMessage />
        </FormItem>
         )}
         />

          </div>
   

          <div className="w-full flex justify-between">

        <FormField
          control={form.control}
          name="receptionDate"
          render={({ field }) => (
            <FormItem className="w-2/12">
              <FormLabel>Reception Date</FormLabel>
              
              <Popover>
            <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !field.value && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              initialFocus
            />
            </PopoverContent>
        </Popover>

        {form.formState.errors.receptionDate ? <FormMessage > {form.formState.errors.receptionDate.message}</FormMessage>: null }
        </FormItem>
         )}
         />

          <FormField
            control={form.control}
            name="receptionTime"
            render={({field}) => (
              <FormItem className="w-2/12">
                <FormLabel>Reception Time</FormLabel>
                <FormControl>
                    <Input type="time" placeholder="Invoice" {...field}  />
                </FormControl>
                
                {form.formState.errors.receptionTime ? <FormMessage > {form.formState.errors.receptionTime.message}</FormMessage>: null }
              </FormItem>
            )}
          />

        
        <FormField
            control={form.control}
            name="termometer"
            render={({field}) => (
              <FormItem className="w-2/12">
                <FormLabel>Termometer No.</FormLabel>
                <FormControl>
                    <Input placeholder="Termometer No." {...field}  />
                </FormControl>
                
                {form.formState.errors.termometer ? <FormMessage > {form.formState.errors.termometer.message}</FormMessage>: null }
              </FormItem>
            )}
          />


          
        <FormField
            control={form.control}
            name="temperature"
            render={({field}) => (
              <FormItem className="w-3/12">
                <FormLabel>Temperature</FormLabel>
                <FormControl>
                    <Input placeholder="C" {...field}  />
                </FormControl>
                
                {form.formState.errors.temperature ? <FormMessage > {form.formState.errors.temperature.message}</FormMessage>: null }
              </FormItem>
            )}
          />


      </div>

        <FormField
            control={form.control}
            name="observation"
            render={({field}) => (
              <FormItem>
                <FormLabel>Observations</FormLabel>
                <FormControl>
                    <Textarea
                      placeholder="Observations..."
                      className="resize-none"
                      {...field}
                    />
                </FormControl>
                
                {form.formState.errors.observation ? <FormMessage > {form.formState.errors.observation.message}</FormMessage>: null }
              </FormItem>
            )}
          />

              <div className="w-full flex justify-start items-center">

          <FormField
            control={form.control}
            name="cesavedac"
            render={({field}) => (
              <FormItem className="w-[20%]">
                <FormLabel>Cesavedac</FormLabel>
                <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                </FormControl>
                
                {form.formState.errors.cesavedac ? <FormMessage > {form.formState.errors.cesavedac.message}</FormMessage>: null }
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desinfection"
            render={({field}) => (
              <FormItem className="w-[20%]">
                <FormLabel>Did you desinfected the area before use?</FormLabel>
                <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                </FormControl>
                
                {form.formState.errors.cesavedac ? <FormMessage > {form.formState.errors.cesavedac.message}</FormMessage>: null }
              </FormItem>
            )}
          />
        </div>



          <Button type="submit"  disabled={form.formState.isLoading}>
            Create Order
          </Button>
          </form>
    </Form>

     
    </div>

            </div>

        </div>
        )
}








 


  