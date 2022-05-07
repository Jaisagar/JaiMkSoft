import React from 'react'

const Menucard = ({nemuData}) => {
 
    const mynumber = {color:"white"}//this is color objects
  return (
    <>
     <h1>This is my Restorents Frist Project of React</h1>
        {nemuData.map((curElm)=>{

const {id, name, author,discription, image , price}= curElm;

          return(
            <>
           
            <div className="card-container" key={id}>
    <div className="card">
        <div className="card-body">
            <span className="card-number" style={mynumber}>{id}</span> {/*this is color objects*/}
          
              <h1 className="card-outher" style={{color:"#8f630d"}}>{name} </h1> {/*INLINE CSS UESD*/}
             <h2 className="cared-title">{author} </h2>
             <div className="card-discription">{discription}</div>
             
              
               <img src={image} alt="image" className="card-media" /> 
              <div className="midea">
              <div href="#" className="readmore">Read More</div>
              <div className="readmore">  Rs.{ price}</div>
        <div className="card-tag"> Order Now</div>
        </div>
        </div>
       
    </div>
</div>
</>
          );
        })

        } </>
  )
}

export default Menucard