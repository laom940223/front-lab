import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
import { FormControl } from "@/components/ui/form"
  
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

  import { ChevronsUpDown, Check   } from "lucide-react"



 


export const OrderClientComboBox = ({ value, onSelect } : {  fieldName: string, value : string, onSelect:( value:string)=>void })=>{

    



      const handleValueChange = (value : string)=>{


      }


            return (<Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !value && "text-muted-foreground"
                      )}
                    >
                      {value
                        ? languages.find(
                            (language) => language.value === value
                          )?.label
                        : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput onValueChange={handleValueChange} placeholder="Search framework..."  />
                        <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup className=" max-h-[40vh] overflow-y-scroll">
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={()=>{
                            onSelect(language.value)
                        }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            )
}