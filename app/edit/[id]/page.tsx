'use client';
import React,{ useState } from "react";
import { useData } from "../../_components/DataProvider";
const Edit=({params}:{params:Promise<{id:number}>})=>{    
    
    const{id}=React.use(params);
    const{state,dispatch}=useData();

    if(id>=state.studentRecords.length)
    {
        return <div>Record not found</div>;
    }

    const[data,setData]=useState(state.studentRecords[id]);
   


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            setData({...data,[e.target.name]:e.target.value});        
        }
    const handleUpdate=()=>{
        console.log("data has been updated");  
        dispatch({type:'update',payload:{ind:id,updatedData:data}});  
    }

    //console.log(state.studentRecords[id]);
    return(
        <>
            <h2>Edit record having id : {id} </h2>
            Name : <input type="text" name="name" value={data.name} onChange={handleChange} /><br />
            Age : <input type="text" name="age" value={data.age} onChange={handleChange} /><br />
            Email : <input type="text" name="email" value={data.email} onChange={handleChange} /><br />
            <input type="submit" value="Update" onClick={handleUpdate} />
        </>
    );
}
export default Edit;