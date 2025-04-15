import {useDispatch} from "react-redux"
import { add } from "./action/listAction"
import { useState } from "react"
import { toast } from 'react-toastify';


export default function AddList(){
    const dispatch = useDispatch()
    const [list,setList]= useState("")
    
    const addList = ()=>{
        if(list.trim()==""){
            toast.error('List cannot be empty !', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
        }
        else{
            dispatch(add(list))
            setList("")
        }
        

    }
    return(
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:"86vh"}}>
                <div className="row">
                    <div className="col">
                            <input className="py-1" value={list} onChange={(e)=>{setList(e.target.value)}}/>
                    </div>
                    <div className="col">
                        <button onClick={addList} className="btn btn-outline-dark">ADD</button>
                    </div>
                   
                </div>
            </div>    
        </>
    )
}