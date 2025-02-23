import { useState } from "react"


export default function ToDo(){
    var [arr,setArr] = useState([])

    // Function on Add Button
    function addBtn(){
        var x = document.getElementById('inp').value
        if(x.trim()!=""){
            setArr([...arr,x])
            document.getElementById('inp').value = ""
        }
        else{
            document.getElementById('empty').innerHTML = "Don't add empty values"
            setTimeout(()=>{
                document.getElementById('empty').innerHTML=""
            },2000)
        } 
    }

    return(
        <>
        <div className="container mt-5 pt-3 px-3">
            <h1 className="mb-4">To Do list</h1>
            <input id="inp"/>  
            <button className="btn btn-primary ms-3" onClick={addBtn}>Add</button> 

            <table className="table table-primary table-info mt-3 table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>List Contents</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((el,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span id="empty"></span>
        </div>
    </>
    ) 
}