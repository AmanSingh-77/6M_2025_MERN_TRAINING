import { useNavigate } from "react-router-dom"

export default function LogOutConfirm({setIsOpen}){
    var nav = useNavigate()
    return(
        <div className="d-flex flex-column">
             <p className="fw-bold fs-3 text-success">Are You Sure You Want To Logout ?</p>
             <div className="d-flex justify-content-around w-50 mx-auto">
                <button className="btn btn-success " onClick={()=>{nav('/')}}>LogOut</button>
                <button className="btn btn-success" onClick={()=>{setIsOpen(false)}}>Cancel</button>
             </div>
             
        </div>
       
        
    )
}