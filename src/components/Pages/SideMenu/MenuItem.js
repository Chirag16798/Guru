import React, { useState } from 'react';
import Divider from './Divider';
import { Link } from 'react-router-dom';


const  MenuItem = (props) => {

    const { name, subMenu,iconClass,onClick ,to } = props;

    const [expand,setExpand] = useState(false);
    
    return (
            <li onClick={onClick}>
               <Link to={to} onClick={()=> setExpand(!expand)} className='menu-item'>
                   <div className="menu-icon">
                        <i class={iconClass}></i>
                   </div>
                   <span>{name}</span>
               </Link>
               {subMenu && subMenu.length > 0 ? ( 
                   <ul className={`sub-menu ${expand ? "sub-active" : ""}`}>
                       {subMenu.map((menu,index) =>(  
                        <li key={index}>
                          <Link to={menu.to}>
                          <i class="bi bi-chevron-double-right"></i> {menu.name}
                          </Link>
                       </li>
                       ))}
               </ul> ) : null
               }
               <Divider />
            </li>

    )
}

export default MenuItem;