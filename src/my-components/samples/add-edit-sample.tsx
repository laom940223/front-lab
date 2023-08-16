import * as React from "react"

import { cn } from "@/lib/utils"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
 import { SampleSite} from "../../types/clients"


interface AddEditSampleFormProps extends React.HTMLAttributes<HTMLDivElement> {

//   addClient:(values:Client)=>void,
  onClose:()=>void,
  sampleEdit ?:SampleSite

}

const createClientSchema = z.object({
  
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  })
})



export function AddEditSample({ className, onClose ,    sampleEdit ,...props }: AddEditSampleFormProps) {
 

  const form = useForm<z.infer<typeof createClientSchema>>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      name: sampleEdit?.name || "",
    
      
       
    },
  })

 
  function onSubmit(values: z.infer<typeof createClientSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    // addClient({id:24, ...values})
    onClose()
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





          <Button  type="submit"  disabled={form.formState.isLoading}>
            {sampleEdit ? "Edit Site"  : "Add Site"}
          </Button>
          </form>
    </Form>

     
    </div>
  )
}