'use client';
import React,{createContext,useContext,useReducer} from "react";


type Student={    
    name:string;
    age:number;
    email:string;
};


type Records={
    studentRecords:Student[]
};

type ActionType={type:'add',payload:Student} 
                | {type:'reset'} 
                | {type:'del',payload:number}
                | {type:'update',payload:{ind:number,updatedData:Student}};

type ContextType={
    state:Records;
    dispatch:React.Dispatch<ActionType>;
};

const DataContext=createContext<ContextType>({} as ContextType);

export const useData=()=>{
    return useContext(DataContext);
}
const is:Records={
    studentRecords:[]
};
const reducer=(state:Records,action:ActionType):Records=>{
    
    switch(action.type)
    {
        case "add" :    const rcds=[...state.studentRecords];
                        rcds.push(action.payload);
                        return{studentRecords:rcds};
        
        case "del" : const myArr=[...state.studentRecords];
                     myArr.splice(action.payload,1);
                     return {studentRecords:myArr};  
        
        case "update" : const arrCpy=[...state.studentRecords];
                        arrCpy[action.payload.ind]=action.payload.updatedData;
                        return {studentRecords:arrCpy};

                        
        case "reset" : return is;
        default : return state;
    }
}

const DataProvider=({children}:{children:React.ReactNode})=>{
    const[state,dispatch]=useReducer(reducer,is);
    return(
        <DataContext value={{state,dispatch}}>
                {children}
        </DataContext>
    );
}
export default DataProvider;