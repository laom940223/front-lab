import { useEffect, useState } from "react"




export type DebounceValueProps<T> ={


    time: number,

    value : T

}

export function  useDebounceValue<T> (value: T, time=500){

    const [debounceValue, setDebounceValue] = useState<T>()

    useEffect( ()=>{

        const timeOutId  =  setTimeout(() => {
            // console.log(time)
            setDebounceValue(value)
        }, time);
        return ()=>{  clearTimeout(timeOutId)}

    },[time, value])



    return { debounceValue}


}