import React, { useState , useEffect} from 'react';
import logo from '../../../assets/logo.png'
import Divider from './Divider';
import { useNavigate } from "react-router";
import { useUserAuth } from "../../../Contex/UserAuthContex";

import MenuItem from './MenuItem';

import SideContent from '../RightBar/SideContent';



const SideMenu = (props) => {

    const [inactive,setInactive] = useState(false);

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };


    const menuItems = [
        {
            name : 'Dashboard', to : '/home' , iconClass :'bi bi-speedometer2'
        },
        {
            name : 'Wasp' , to : '/Wasp' , iconClass : 'bi bi-robot'
        },
        {
            name : 'Task' , to : '/Task' , iconClass : 'bi bi-list-ul'
        },
        {
            name : 'Tact' , to : '' , subMenu : [
                {
                name : 'Import & Export Tact',
                to : 'content/courses'
                },
                {
                name : 'Search Tact',
                to : 'content/courses'
                },
                {
                    name : 'Add Tact',
                    to : 'content/courses'
                },
            ],
            iconClass : 'bi bi-fonts'
        },
        {
            name : 'Cost' , to : '' , subMenu : [
                {
                name : 'SP & Cost',
                to : 'content/courses'
                },

                {
                name : 'Checker',
                to : 'content/courses'
                },

                {
                    name : 'Re-Checker',
                    to : 'content/courses'
                },
            ],
            iconClass : 'bi bi-currency-dollar'
        },
        {
            name : 'Once' , to : '' , subMenu : [
                {
                name : 'Country',
                to : '/Country'
                },
                {
                name : 'Languages',
                to : '/Languages'
                },
                {
                    name : 'Currency',
                    to : '/Currency'
                },
                {
                    name : 'Measure',
                    to : 'content/courses'
                },
                {
                    name : 'Work Type',
                    to : 'content/courses'
                },
                {
                    name : 'Category',
                    to : 'content/courses'
                },
                {
                    name : 'Status',
                    to : 'content/courses'
                },
                {
                    name : 'Codes',
                    to : 'content/courses'
                },
                {
                    name : 'Outgoing Email Master',
                    to : 'content/courses'
                },
                {
                    name : 'Our Company',
                    to : 'content/courses'
                },
                {
                    name : 'Domain',
                    to : 'content/courses'
                },
            ],
            iconClass : 'bi bi-puzzle-fill'
        },

        {
            name : 'Boss' , to : '' , subMenu : [
                {
                name : 'Our Company & Stationary',
                to : 'content/courses'
                },
                {
                name : 'Users Directory',
                to : 'content/courses'
                },
                {
                    name : 'Permission',
                    to : 'content/courses'
                },
                {
                    name : 'Staff Mailers & Alerts',
                    to : 'content/courses'
                },
                {
                    name : 'Reports',
                    to : 'content/courses'
                },
                {
                    name : 'Backup & Restore',
                    to : 'content/courses'
                },
            ],
            iconClass : 'bi bi-newspaper'
        },
    ]

    useEffect(() =>{
        if(!inactive){
            document.querySelectorAll('.sub-menu').forEach(el=>{
                el.classList.remove('sub-active');
            })
        }
        props.onCollapse(inactive)
    },[inactive])




    return (
        <>
        <div className={`sideMenu ${inactive ? 'inactive' : ""}`}>
             <div className="sideMenu__top">
                    <div className="logo" onClick={()=> setInactive(!inactive)}>
                        <img src={logo}  />
                    </div>
              </div>
              <Divider /> 

              <div className="main-menu">
                    <ul>
                    {menuItems.map((menuItem,index) =>(
                           <MenuItem
                               key = {index}
                               to = {menuItem.to}
                               name = {menuItem.name}
                               iconClass = {menuItem.iconClass}
                               subMenu = {menuItem.subMenu || []}
                               onClick = {() =>{
                                   if(!inactive){
                                       setInactive(true)
                                   }
                               }}
                           />
                       ))}
                       <li>
                            <a className='menu-item' onClick={handleLogout}>
                                <div className="menu-icon">
                                     <i class="bi bi-box-arrow-left"></i>
                                </div>
                                <span>Logout</span>
                            </a>
                        </li>
                        <Divider />

                    </ul>
              </div>
        </div>
        <SideContent />
        </>
    )
}

export default SideMenu
