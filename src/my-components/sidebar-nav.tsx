
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Link, useLocation } from "react-router-dom"


interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  
}

interface MyLinkProps {

  to:string,
  label:string

}


const links = [
    {
        to:"/",
        label:"Dashboard"
    },
    {
      to:"/clients",
      label:"Clients"
    }
    ,
    {
        to:"/users",
        label:"Users"
    },

    {
        to:"/orders",
        label:"Orders"
    }

] as MyLinkProps[]



export function SidebarNav({ className,  ...props }: SidebarNavProps) {
  const {pathname} = useLocation()

  
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      

      {
        links.map((link, index)=>(

            <Link
                key={index}
                to={link.to}
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === link.to
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent hover:underline",
                    "justify-start"
                )}
                >
                {link.label}
            </Link>


        ))


      }
        

       
      
    </nav>
  )
}