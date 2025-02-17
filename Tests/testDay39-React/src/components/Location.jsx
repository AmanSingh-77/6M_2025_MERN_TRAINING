import { Fragment } from "react";

export default function Location(){
var arr = ['India', 'China','Australia','USA','Canada']
    
    return(
            <>
            {arr.map((loc,index)=>{
                return(
                    <Fragment key={index}>
                        <span>{loc}</span><br/>
                    </Fragment>
                )
            })}
            </>   
        )   
}