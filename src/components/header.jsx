import React, { use, useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiEllipsisVertical, HiMiniBars3BottomRight } from 'react-icons/hi2';
import { GifState } from '../context/gif-context';
const Header = () => {
    const[categories, setCategories]=useState([]);
    const[showCategories, setShowCategories]=useState(false);
     
    const{gf,filter,setFilter,favourites}= GifState();

     const fetchGifCategories = async() => {
      const {data}= await gf.categories();
      setCategories(data);
     };
     useEffect(() => {
      fetchGifCategories();
     },[]);
  return (
    <nav>
    <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2" >
         <img src="/logo.svg" className="w-8" alt="Giphy Logo"/>
         <h1 className="text-5xl font-bold tracking-tight cursor-pointer" >GIPHY</h1>
        </Link>
        <div className="font-bold text-md flex gap-2 items-center">
        {/*render categories*/}
       { categories.slice(0,5)?.map((category)=>{
        return(
          <Link
           key={category.name} 
            to={`/${category.name_encoded}`}
          className="px-4 py-1 hover:gradient border b-4 hidden lg:block">
           {category.name}
          </Link>
        );
       })}

        
       <button onClick={()=>
        setShowCategories(!showCategories)}>
          <HiEllipsisVertical 
       size={35}
        className={`py-0.5 hover:gradient ${
        showCategories ? "gradient" : "" 
      } border b-4 hidden lg:block`}
        />
       </button>
       <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
       <Link to="/favourites">Favorite GIFs</Link>
        </div>
        <button>
          <HiMiniBars3BottomRight className="text-sky-400 block lg:hidden "
          size={30}
          />

        </button>
        </div>
        
        {showCategories &&(
        <div className="absolute right-0 top-16 px-10 pt-6 pb-9 w-full gradient z-20">
          <span>Categories</span>
          <hr/>
          <div>
            <Link className="font-bold">Reactions</Link>
           </div>
          </div>
          )}
        
          </div>
          {/*search*/}
    </nav>
    
  );
};

export default Header;