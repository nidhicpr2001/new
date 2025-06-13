'use client'
import React from 'react'
import { useState } from 'react'
const Menubar = () => {
   const [data,setData]=useState({fn:"",sn:"",res:""})

   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e);
    
   setData({...data,[e.target.name]:e.target.value})
   console.log(data.fn);
   console.log(data.sn);
   
   
   }
const add=()=>{
    const a=Number(data.fn);
    const b=Number(data.sn);
    const c=String(a+b);
    setData({...data,res:c})
}
  return (
   <>
<input type="text" name='fn' value={data.fn} onChange={handleChange}/>

    <input type="text" name='sn' value={data.sn} onChange={handleChange}/>

    <input type="button" value="Add" onClick={add}/>
     <input type="text" name='sn' value={data.res} onChange={handleChange}/>
   </>
  )
}

export default Menubar