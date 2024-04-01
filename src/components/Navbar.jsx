import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";
import { BsToggle2On } from "react-icons/bs";


const Navbar = ({ bgColor ,color ,toggleButton ,toggle }) => {
  const bgcolor = color == "black"?"#cbc5c5":"black"
  return (
    <>
    <div className='nav_bar'
    style={{backgroundColor:`${bgcolor}`,
    }}
    >
    <div className='logo' 
    style={{
      backgroundColor:`${bgColor }`,
      color:`${color}`,
    }}
    >
    WDM 
      <div onClick={toggleButton}>
      {toggle?(

        <BsToggle2On/>
      ):(
        <FaToggleOff />
        )}
        {" "}
        </div>
     </div>
    <div className="search"
    style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`,
    }}
    >
   <div className ='left'> 
       <MdOutlineSearch/> Search here...</div>
 
    <div className='right'>
         <IoFilterSharp />Filters</div>
    </div>

    <div className= 'seller'
    style={{
      backgroundColor: `${bgColor}`,
      color:`${color}`,
    }}> 
    Become a seller..
    </div>
   </div>
  
    </>
    
  )
}

export default Navbar