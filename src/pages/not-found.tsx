import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"

export const NotFound = ()=>{


    const navigate = useNavigate()

    const handleGoBack = ()=>{

        navigate(-1)
    }

    return (
    <div className="w-full flex flex-col gap-3 items-center justify-center py-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        404 Not found
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The page you are looking for was not found
      </p>
        <div className="flex gap-8">
            <Link to="/"><Button>Go to Dashboard</Button></Link>
            <Button onClick={handleGoBack}> Go Back</Button>
        </div>
    </div>)
}