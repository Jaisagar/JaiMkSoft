import React, {useState} from 'react';
import Menu from "./MainApi.js";
import Menucard from './Menucard.js';
import NavBar from './NavBar.js';

const uniqueList= [...new Set (Menu.map ((curElm) => {
    return curElm.cotagary;
})
),
"All",
];
console.log(uniqueList);

const Restorents = () => {
    const [nemuData, setMenudata]= useState(Menu);

    const [nemuList, setNemuList]= useState(uniqueList);

    const filterItems = (cotagary) =>{
        if(cotagary==="All"){
            setMenudata(Menu);
            return;
        }
     const updetedList = Menu.filter((curElm)=> {
       return curElm.cotagary===cotagary;
     });
     setMenudata(updetedList);
 };
  return (
    <>

<NavBar filterItems={filterItems} nemuList={nemuList}/>
    <Menucard nemuData={nemuData}/>
    </>
  )
}

export default Restorents