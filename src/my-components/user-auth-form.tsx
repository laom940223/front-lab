import * as React from "react"

import { cn } from "@/lib/utils"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const logInSchema = z.object({
  
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),


})


export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
 

  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      username: "",
      password:""
    },
  })

 
  function onSubmit(values: z.infer<typeof logInSchema>) {
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
            name="username"
            render={({field}) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                    <Input placeholder="Username" {...field} />
                </FormControl>
                
                {form.formState.errors.username ? <FormMessage > {form.formState.errors.username.message}</FormMessage>: null }
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                    <Input type="password" placeholder="Password"  {...field} />
                </FormControl>
                
                {form.formState.errors.password ? <FormMessage > {form.formState.errors.password.message}</FormMessage>: null }
              </FormItem>
            )}
          />

          <Button type="submit"  disabled={form.formState.isLoading}>
            Log in
          </Button>
          </form>
    </Form>

     
    </div>
  )
}