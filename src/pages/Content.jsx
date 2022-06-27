import React from 'react'
import {MdOutlineQrCodeScanner} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";


//Content Screen with Icons for going to Qr Scanner and for open Settings 
function content() {
  return (
    <div>
        <MdOutlineQrCodeScanner /> 
        <IoSettingsOutline />  
       
        </div>
  )
}

export default content