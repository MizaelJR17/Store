import React from 'react';
import { BsCart3, BsGrid1X2Fill, 
    BsFillArchiveFill, BsFillGrid3X3GapFill,
     BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCart } from 'react-icons/bs';


function Sidebar() {
  return (
    <aside id ="sidebar">
        <div className='sidebar-title'>
            <BsCart className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon'>X</span>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsCart3 className='icon'/> Dashboard   
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsGrid1X2Fill className='icon'/> Products   
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsFillArchiveFill className='icon'/> Categories  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsFillGrid3X3GapFill className='icon'/> Customers  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsListCheck className='icon'/>  Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsMenuButtonWideFill className='icon'/> Reports  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                      <BsFillGearFill className='icon'/> Settings  
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar