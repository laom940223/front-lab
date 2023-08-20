import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useDebounceValue } from "@/hooks/useDebounceValue"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import React, {  useEffect, useState } from "react"

   



interface StarWars {

    name:string
}

export const AutoCompleteInput = ({ value, onChangeProp}:{  value:string, onChangeProp : (value :string)=>void })=>{


    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [options, setOptions] = useState<StarWars[]>([])
    const { debounceValue } = useDebounceValue(search)
   
    

    useEffect(()=>{

        async function getData (){

            const  response  = await  fetch("https://swapi.dev/api/people")
            const data = await response.json()
            setOptions(data.results)
        }


        getData()
        



        // onChangeProp(debounceValue!)
    },[debounceValue])



   

    


    const commandOptions =  options.map((framework) => (
        <CommandItem
          key={framework.name}
          onSelect={() => {
            onChangeProp(framework.name)
            setOpen(false)
          }}
        >
          <Check
            className={cn(
              "mr-2 h-4 w-4",
              value === framework.name ? "opacity-100" : "opacity-0"
            )}
          />
          {framework.name}
        </CommandItem>
      ))

    return (


        <Popover  open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="items-center ">
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="min-w-[200px]"
                >

                    {value}
                {/* {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>

                
            </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput value={search} onValueChange={setSearch} placeholder="Search framework..." />


            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
             {commandOptions}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )

}