import { useState } from "react"

export default function Form(){
    var [n,setName] = useState("")
    var [email,setEmail] = useState("")
    var [pass,setPass] = useState("")
    var [gender,setGender] = useState("")
    var [state,setState] = useState("")
    var [tc,setTc] = useState("")
    
    return(
        <>
        <div className="container px-5 pt-1">

            {/* Heading */}
            <h1 className="mb-5 mt-3">Registration Form</h1>
             
             {/* Name */}
            <div className="my-3">
            <label>NAME : </label>
            <input className="ms-3 px-2" value={n} onChange={(e)=>{setName(e.target.value)}}/>
            <br/><span>{n}</span>
            </div>

            {/* Email */}
            <div className="my-3">  
            <label>EMAIL : </label>
            <input className="ms-3 px-2 " type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/><span>{email}</span>
            </div>
            
            {/* Password */}
            <div className="my-3">
            <label>Password : </label>
            <input className="ms-3 px-2 " type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <br/><span>{pass}</span>
            </div>

            {/* Gender */}
            <div className="my-3">
            <label className="me-1">Gender : </label>
            M<input className="ms-1" name="gender" type="radio" onChange={()=>{setGender('Male')}}/> &nbsp;
            F<input className="ms-1" name="gender" type="radio" onChange={()=>{setGender('Female')}}/>
            <br/><span>{gender}</span> <br/>
            </div>

            {/* State */}
            <div className="my-3">   
            <label>State : </label>
            <select className="ms-3 px-2 " value={state} onChange={(e) => {
                setState(e.target.value)
                }}>

                <option defaultValue={true}>State</option>
                <option onSelect={()=>{setState('Punjab')}}>Punjab</option>
                <option onSelect={()=>{setState('Maharashtra')}}>Maharashtra</option>
                <option onSelect={()=>{setState('Delhi')}}>Delhi</option>
                <option onSelect={()=>{setState('West Bengal')}}>West Bengal</option>
                <option onSelect={()=>{setState('Jammu and Kashmir')}}>Jammu and Kashmir</option>
                <option onSelect={()=>{setState('Haryana')}}>Haryana</option>

            </select>
            <br/><span>{state}</span>
            </div>      
            
            {/* Terms and Conditions */}
            <div className="mt-5">        
            <label>Terms & Conditions</label>
            <input className="ms-3 px-2 " type="checkbox" value={tc} onChange={(e)=>{setTc(e.target.checked)}}/>
            <br/><span className="text-dark">T&C are </span><span>{tc?'Checked':'Un-Checked'}</span>
            </div>   

        </div>
        
        {/* Your Entries */}
         <div className="text-danger mt-2">
            <h4 className="text-dark"><u>Your Entries</u></h4>
            <h5>{n}</h5>
            <h5>{email}</h5>
            <h5>{pass}</h5>
            <h5>{gender}</h5>
            <h5>{state}</h5>
            <h5>{tc?'Checked':'Un-Checked'}</h5>
         </div>

        </>
    )
}