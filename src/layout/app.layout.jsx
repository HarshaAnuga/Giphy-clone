import React from 'react';
import { Outlet } from 'react-router-dom';

const Applayout=()=>{
    return(
        <div>
            <main>
            <Outlet/>
            </main>
        </div>
    )
}
export default Applayout;