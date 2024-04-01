import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa"
import { IoIosNotificationsOff } from "react-icons/io"
import { FaWallet } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { RiLogoutBoxFill} from "react-icons/ri"


const Sidebar = ({bgColor,color}) => {
  return (
    <div className='side_bar_content'
     style={{backgroundColor: `${bgColor}`,
     color:`${color}`
     }}>
        <div className="top_content">
            <div className='items'><FaHome className='icons'/>Home</div>
            <div className='items'><IoMdNotifications className='icons'/>Notification</div>
            <div className='items'><FaShoppingCart className='icons'/>Shop</div>
            <div className='items'><IoIosNotificationsOff className='icons'/>Conversation</div>
            <div className='items'><FaWallet className='icons'/>wallet</div>
            <div className="items"><FaYoutube className='icons'/>Subscription</div>
            <div className="items"><BsPersonCheckFill className='icons'/>My Profile</div>
        </div>
        <div className='bottom_content items'>
        <RiLogoutBoxFill/>Log out</div>
    </div>
  )
}

export default Sidebar