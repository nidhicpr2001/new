'use client';
import Link from "next/link";
import { useData } from "../_components/DataProvider";
const Show=()=>{   
    const{state,dispatch}=useData();    
    return(
        <>
            <h2 className="text-center p-10 text-lg">Show</h2>
            {
                state.studentRecords.map((row,i)=>{return(
                    <div key={i} className="box">
                        <h3>{row.name}</h3>
                        <p>
                            {row.age} <br />
                            {row.email}
                        </p>
                        <p>
                            <input type="button" value="X" 
                                onClick={()=>dispatch({type:'del',payload:i})} className="bg-red-500 p-1 rounded-sm"/>

                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href={"/edit/"+i} className="bg-yellow-200 p-2 rounded-sm">Edit</Link>
                        </p>
                    </div>
                )})
            } 
           
        </>
    );
}
export default Show;