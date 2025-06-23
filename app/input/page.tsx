'use client';
import React,{ useState } from "react";
import { useData } from "../_components/DataProvider";

const Input=()=>{
    const[data,setData]=useState({name:"",age:0,email:""});
    const{dispatch}=useData();


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value});        
    }
    const handleSave=()=>{
        //console.log(data);
        // push data into array in context
        dispatch({type:'add',payload:data});
        setData({name:"",age:0,email:""});
        console.log("Record has been saved");
    }
    return(
        <>
           <label className="pl-5 text-lg">Name : </label> <input type="text" name="name" value={data.name} onChange={handleChange} className="border border-gray-400 rounded-md p-2 text-base m-5"/><br />
           <label className="pl-5 text-lg">Age :    </label> <input type="text" name="age" value={data.age} onChange={handleChange} className="border border-gray-400 rounded-md p-2 text-base m-5"/><br />
              <label className="pl-5 text-lg">Email : </label><input type="text" name="email" value={data.email} onChange={handleChange} className="border border-gray-400 rounded-md p-2 text-base m-5"/><br />
            <input type="submit" value="Save data" onClick={handleSave} className="text-lg bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mx-5" />
        </>
    );
}
export default Input;