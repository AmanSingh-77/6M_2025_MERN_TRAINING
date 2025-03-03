import { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import { cont } from "../App";

export var indexContext = createContext()   //context for using index
export default function Home(){
   
    var cont2 = useContext(cont)            //Context for accessing data from app
    var [index,setIndex] = useState(null)      //state for index
    
    return(
        <>
            <indexContext.Provider  value={setIndex}>
                <div className="container">
                        {/* Header */}
                        <div className="row">
                            <div className="col">
                                <Navbar/>
                            </div>
                        </div>

                        {/* Body */}
                        {index===null? <h4>Please Select an option</h4>
                        :
                        <div className={`row  py-4 ps-2 rounded`} >
                            <div className="col">
                                <div className="row mb-4">
                                    <div className="col-2">
                                        <h5>Title : </h5>
                                    </div>
                                    <div className="col-10">{cont2[index]?.title}</div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-2">
                                        <h5>Description : </h5>
                                    </div>
                                    <div className="col-9">{cont2[index]?.desc}</div>
                                </div>

                                <div className="row">
                                    <div className="col-2">
                                        <h5>Syntax : </h5>
                                    </div>
                                    <div className="col-9">{cont2[index]?.syntax}</div>
                                </div>
                            </div>
                        </div>
                        }
                </div>
            </indexContext.Provider> 
        </>
    )
}