import React from 'react';
import { Outlet } from "react-router-dom";

const Applayout=()=>{
    return(
        <div className= "bg-gray-950 text-white min-h-screen">
            <main>
            <Outlet/>
            </main>
        </div>
    )
}
export default Applayout;