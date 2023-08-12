
import {Outlet} from "react-router-dom"
import { UserNav } from "./user-nav"
import { Search } from "./search"

import { SidebarNav } from "./sidebar-nav"


export const Layout = ()=>{

        

    return(
        <div className=" relative h-[100vh] flex w-full flex-wrap p-0">
            
            <div className="flex h-[60px] w-full border-b fixed left-0 top-0 z-40">
                    <div className="flex items-center px-4 w-1/6">
                        Logo
                    </div>
                    <div className="flex items-center gap-2 px-4 w-5/6 flex-row-reverse">
                        
                        <UserNav/>
                        <Search/>
                    </div>
            </div>

            <div className="w-full mt-[60px]  flex ">
                <div className="w-[15%] border-r-2 p-4">
                    <SidebarNav />
                </div>
                
                <div className="w-[85%] p-6">
                    <Outlet/>
                </div>
                
            </div>

        </div>
    )

}