import * as React from "react"

import { cn } from "@/lib/utils"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
 import {Client} from "../../types/clients"


interface AddClientFormProps extends React.HTMLAttributes<HTMLDivElement> {

  addClient:(values:Client)=>void,
  onClose:()=>void,
  clientEdit ?:Client

}

const createClientSchema = z.object({
  
  clientName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  billingAddress: z.string().min(2, {
    message: "Billing address must be at least 2 characters.",
  }),
  sampleSite: z.string().min(2, {
    message: "Sample site must be at least 2 characters.",
  }),
  liable: z.string().min(2,{ message:"Liable needs to be al teast 2 charactes"}),
  email: z.string().email().min(2,{ message:"Email needs to be al teast 2 charactes"}),
  phone : z.string().length(10, "Phone must be 10 digits long")

})



export function AddClientForm({ className, onClose ,  addClient, clientEdit ,...props }: AddClientFormProps) {
 

  const form = useForm<z.infer<typeof createClientSchema>>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      clientName: clientEdit?.clientName || "",
      billingAddress: clientEdit?.billingAddress || "", 
      email: clientEdit?.email ||  "",
      liable: clientEdit?.liable || "",
      phone: clientEdit?.phone || "",
      sampleSite: clientEdit?.sampleSite || ""
       
    },
  })

 
  function onSubmit(values: z.infer<typeof createClientSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    addClient({id:24, ...values})
    onClose()
  }



  


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <FormField
            control={form.control}
            name="clientName"
            render={({field}) => (
              <FormItem>
                <FormLabel> Name</FormLabel>
                <FormControl>
                    <Input placeholder="Name" {...field} />
                </FormControl>
                
                {form.formState.errors.clientName ? <FormMessage > {form.formState.errors.clientName.message}</FormMessage>: null }
              </FormItem>
            )}
          />


        <FormField
            control={form.control}
            name="billingAddress"
            render={({field}) => (
              <FormItem>
                <FormLabel>Billing Address</FormLabel>
                <FormControl>
                    <Input placeholder="Billing Address" {...field} />
                </FormControl>
                
                {form.formState.errors.billingAddress ? <FormMessage > {form.formState.errors.billingAddress.message}</FormMessage>: null }
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sampleSite"
            render={({field}) => (
              <FormItem>
                <FormLabel>Sample Site</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Sample Site"  {...field} />
                </FormControl>
                
                {form.formState.errors.sampleSite ? <FormMessage > {form.formState.errors.sampleSite.message}</FormMessage>: null }
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="liable"
            render={({field}) => (
              <FormItem>
                <FormLabel>Liable</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Liable"  {...field} />
                </FormControl>
                
                {form.formState.errors.liable ? <FormMessage > {form.formState.errors.liable.message}</FormMessage>: null }
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Email"  {...field} />
                </FormControl>
                
                {form.formState.errors.email ? <FormMessage > {form.formState.errors.email.message}</FormMessage>: null }
              </FormItem>
            )}
          />

        <FormField  
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Phone"  {...field} />
                </FormControl>
                
                {form.formState.errors.phone ? <FormMessage > {form.formState.errors.phone.message}</FormMessage>: null }
              </FormItem>
            )}
          />



          <Button  type="submit"  disabled={form.formState.isLoading}>
            {clientEdit ? "Edit Client"  : "Add User"}
          </Button>
          </form>
    </Form>

     
    </div>
  )
}