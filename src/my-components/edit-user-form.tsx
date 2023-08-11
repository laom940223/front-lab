import * as React from "react"

import { cn } from "@/lib/utils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "@/types/user"


interface EditUserFormProps extends React.HTMLAttributes<HTMLDivElement> {
    user: User

}

const createUserSchema = z.object({
    username: z.string().min(2, {
        message: "username must be at least 2 characters.",
      }),
 

  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }).optional().or(z.literal("")),

  cPassword: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }).optional().or(z.literal("")),

  name: z.string().min(2,{ message:"Name needs to be al teast 2 charactes"}),


  initials: z.string().min(2,{ message:"Initials needs to be al teast 2 charactes"}),
    
    role : z.string()

}).refine((data=>data.password === data.cPassword), { path:["cPassword"], params:{["cPassword"]:null}, message:"Passwords must match"})



export function EditUserForm({ className, user ,...props }: EditUserFormProps) {
 

  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      username:user.username,
      password:"", 
      cPassword:"",
      initials:user.initials,
       name:user.name,
       role:user.role
       
    },
  })

 
  function onSubmit(values: z.infer<typeof createUserSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



  console.log(form.formState.errors)


  return (
    <div className={cn("grid gap-6", className)} {...props}>

        <h2>{user.username}</h2>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
      <FormField
            control={form.control}
            name="username"
            defaultValue={user.username}
            render={({field}) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input disabled  placeholder="Username" {...field} />
                </FormControl>
                
                {form.formState.errors.name ? <FormMessage > {form.formState.errors.name.message}</FormMessage>: null }
              </FormItem>
            )}
          />


        <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input  placeholder="Name" {...field} />
                </FormControl>
                
                {form.formState.errors.name ? <FormMessage > {form.formState.errors.name.message}</FormMessage>: null }
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Password"  {...field} />
                </FormControl>
                
                {form.formState.errors.password ? <FormMessage > {form.formState.errors.password.message}</FormMessage>: null }
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="cPassword"
            render={({field}) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                    <Input type="password" placeholder="Confirm Password"  {...field} />
                </FormControl>
                
                {form.formState.errors.cPassword ? <FormMessage > {form.formState.errors.cPassword.message}</FormMessage>: null }
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="initials"
            render={({field}) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                    <Input type="text" placeholder="Initials"  {...field} />
                </FormControl>
                
                {form.formState.errors.initials ? <FormMessage > {form.formState.errors.initials.message}</FormMessage>: null }
              </FormItem>
            )}
          />


        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserRole</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified role to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"ADMIN"}>ADMIN</SelectItem>
                  <SelectItem value="SAMPLER">SAMPLER</SelectItem>
                  <SelectItem value="TESTER">TESTER</SelectItem>
                </SelectContent>
              </Select>
              
              <FormMessage />
        </FormItem>
         )}
         />

          <Button type="submit"  disabled={form.formState.isLoading}>
            Add User
          </Button>
          </form>
    </Form>

     
    </div>
  )
}