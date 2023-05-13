import React from 'react'
import MenuItem from './MenuItem';
const MenuitemList = ({ menulist }) => {
    // console.log("menu item list", menulist)
    // console.log("this is a id",inf);
    return (
        <>
            {
                menulist.map((m,index) => <MenuItem key={index} m={m} />)
            }
        </>

    )
}

export default MenuitemList