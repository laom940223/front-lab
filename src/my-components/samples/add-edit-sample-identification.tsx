


import * as React from "react"

import { cn } from "@/lib/utils"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
 import { SampleIdentification} from "../../types/clients"
import { Checkbox } from "@/components/ui/checkbox"


interface AddEditSampleIdentificationProps extends React.HTMLAttributes<HTMLDivElement> {

  
  
  sampleEdit ?:SampleIdentification

}

const createClientSchema = z.object({
  
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  
  latDegress: z.coerce.number().min(0),

  latMinutes:  z.coerce.number().min(0),

  latSeconds: z.coerce.number().min(0),

  lonDegress: z.coerce.number().min(0),

  lonMinutes: z.coerce.number().min(0),

  lonSeconds: z.coerce.number().min(0),


  siralab: z.boolean(),
  obsolete: z.boolean()

})



export function AddEditSamleIdentification({ className,      ...props }: AddEditSampleIdentificationProps) {
 

  const form = useForm<z.infer<typeof createClientSchema>>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      name: "",
      latDegress:0,
      latMinutes:0,
      latSeconds:0,
      lonDegress:0,
      lonMinutes:0,
      lonSeconds:0,
      obsolete: false,
      siralab:false,
      
       
    },
  })

 
  function onSubmit(values: z.infer<typeof createClientSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    
    
  }



  
  

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel> Name</FormLabel>
                <FormControl>
                    <Input placeholder="Name" {...field} />
                </FormControl>
                
                {form.formState.errors.name ? <FormMessage > {form.formState.errors.name.message}</FormMessage>: null }
              </FormItem>
            )}
          />

            <FormItem className="flex flex-wrap justify-around items-center">
                <FormLabel className="w-full"> Latitude </FormLabel>

                <FormField
                    control={form.control}
                    name="latDegress"
                    render={({field}) => (
                        <>
                        
                        <FormControl className="w-3/12">
                            <Input type="number" min={0} placeholder="°" {...field} />
                        </FormControl>
                        
                        
                        </>
                    )}
                />


                <FormField
                    control={form.control}
                    name="latMinutes"
                    render={({field}) => (
                    <>
                        
                        <FormControl  className="w-3/12">
                            <Input type="number" min={0} placeholder="'" {...field} />
                        </FormControl>
                        
                        {form.formState.errors.latMinutes ? <FormMessage > {form.formState.errors.latMinutes.message}</FormMessage>: null }
                    </>
                    )}
                />
                

                <FormField
                    control={form.control}
                    name="latSeconds"
                    render={({field}) => (
                    <>
                        <FormControl  className="w-3/12" >
                            <Input type="number" min={0} placeholder="'" {...field} />
                        </FormControl>
                        
                        {form.formState.errors.latSeconds ? <FormMessage > {form.formState.errors.latSeconds.message}</FormMessage>: null }
                    </>
                    )}
                />

                {form.formState.errors.latDegress ? <FormMessage > {form.formState.errors.latDegress.message}</FormMessage>: null }
            </FormItem>

            <FormItem className="flex flex-wrap justify-around items-center">
                <FormLabel className="w-full"> Longitude </FormLabel>

                <FormField
                    control={form.control}
                    name="lonDegress"
                    render={({field}) => (
                        <>
                        
                        <FormControl className="w-3/12">
                            <Input type="number" min={0} placeholder="°" {...field} />
                        </FormControl>
                        
                        {form.formState.errors.lonDegress ? <FormMessage > {form.formState.errors.lonDegress.message}</FormMessage>: null }
                        </>
                    )}
                />


                <FormField
                    control={form.control}
                    name="lonMinutes"
                    render={({field}) => (
                    <>
                        
                        <FormControl  className="w-3/12">
                            <Input type="number" min={0} placeholder="'" {...field} />
                        </FormControl>
                        
                        {form.formState.errors.lonMinutes ? <FormMessage > {form.formState.errors.lonMinutes.message}</FormMessage>: null }
                    </>
                    )}
                />
                

                <FormField
                    control={form.control}
                    name="lonSeconds"
                    render={({field}) => (
                    <>
                        <FormControl  className="w-3/12" >
                            <Input type="number" min={0} placeholder="'" {...field} />
                        </FormControl>
                        
                        {form.formState.errors.lonSeconds ? <FormMessage > {form.formState.errors.lonSeconds.message}</FormMessage>: null }
                    </>
                    )}
                />

            </FormItem>
        

        <FormField  
            control={form.control}
            name="siralab"
            render={({field}) => (
              <FormItem>
                
                <FormControl >
                    <div className="flex w-full items-center gap-4">
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    <label
                    htmlFor="siralab"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    > Siralab</label>

                    </div>
                </FormControl>
                
                {form.formState.errors.siralab ? <FormMessage > {form.formState.errors.siralab.message}</FormMessage>: null }
              </FormItem>
            )}
          />


        <FormField  
            control={form.control}
            name="obsolete"
            render={({field}) => (
              <FormItem>
                
                <FormControl >
                    <div className="flex w-full items-center gap-4">
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    <label
                    htmlFor="siralab"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    > Obsolete</label>

                    </div>
                </FormControl>
                
                {form.formState.errors.obsolete ? <FormMessage > {form.formState.errors.obsolete.message}</FormMessage>: null }
              </FormItem>
            )}
          />



          <Button  type="submit"  disabled={form.formState.isLoading}>
            Add
          </Button>
          </form>
    </Form>

     
    </div>
  )
}