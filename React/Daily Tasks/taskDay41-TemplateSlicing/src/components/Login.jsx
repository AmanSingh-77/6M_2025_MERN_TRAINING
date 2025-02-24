import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    var[email,setEmail] = useState()
    var[pass,setPass] = useState()
    var nav = useNavigate()
    
    function submitForm(){
        if(email==='user@gmail.com' && pass==='123') {
            nav('/user')
        }
        else{
            alert('wrong credentials')
        }
        e.preventDefault
    }
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm text-black">
                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                        <form onSubmit={submitForm} style={{ width: "23rem" }}>
                            <h1 className=" mb-3 pb-3">Log in</h1>

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
                            <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}