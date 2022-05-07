import React from 'react'

const NavBar = ({filterItems, nemuList}) => {
  return (
    <>
<div className="navbar">
<div className="btn-group">

{nemuList.map((curElm)=>{
    return(<button className="btn-grop-items" onClick={()=>filterItems(curElm)}>{curElm}</button>);
})}
<div className="logo">JaiMkSoft</div>
<div className="toll_free_banner">
  <div className="call_to_connect">
  <img src="images/request_call.png" alt="" srcset="" />
    <div className="toll_number">9044119134</div>

  </div>
</div>

</div>

</div>


    </>
  )
}

export default NavBar