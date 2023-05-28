import React from 'react'
import MenuItem from './MenuItem';
const MenuitemList = ({ menulist }) => {

    // console.log(menulist);

    return (
        <>{menulist.map((m, index) => <MenuItem key={index} m={m} />)}</>
    )
}

export default MenuitemList