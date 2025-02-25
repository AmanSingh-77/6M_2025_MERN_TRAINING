import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

export default function Login(){
    var[email,setEmail] = useState()
    var[pass,setPass] = useState()
    var nav = useNavigate()
    
    function submitForm(e){
        e.preventDefault()
        if(email==='aman@gmail.com' && pass==='123') {
            nav('/user')
            toast.success('Login Successful')
        }
        else if(email==='admin@trailsToTales.com' && pass==='admin'){
            nav('/admin')
            toast.success('Welcome Admin!')
        }
        else{
            toast.error('Wrong Credentials')
        }
        
    }
    
    return(
            <div className="container-fluid ">
            <div className="row">
                <div className="col-sm text-success">
                    <div className="d-flex align-items-center h-custom-2 px-5  mt-5 pt-5 pt-xl-0 mt-xl-n5">
                        <form onSubmit={submitForm} style={{ width: "23rem" }}>
                            <h1 className="fw-bolder mb-3 pb-3 text-success">Log In</h1>

                            {/* Email */}
                            <div className="form-outline mb-4">
                            
                            <input type="email" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                            <label className="form-label">Email address</label>

                            </div>
                            
                            {/* Password */}
                            <div className="form-outline mb-4">
                            <input type="password" className="form-control form-control-lg" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                            
                            <label className="form-label">Password</label>

                            </div>

                            {/* Login Button */}
                            <div className="pt-1 mb-4">
                            <button className="btn btn-outline-success btn-lg btn-block" type="submit">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </div>
    )
}