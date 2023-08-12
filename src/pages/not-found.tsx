import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const NotFound = ()=>{


    return (
    <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        404 Not found
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The page you are looking for was not found
      </p>
      <Link to="/"><Button>Go to Dashboard</Button></Link>
    </div>)
}