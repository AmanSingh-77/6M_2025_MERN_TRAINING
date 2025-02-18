// Create an array of students and print each name using map

import { Fragment } from "react"

var arr = ['Aman','Shruti','Sam','Ajay','Rohit']
export default function Student(){
    return(
        <>
            <h1>STUDENTS</h1>
            {arr.map((el,index)=>{
                return(
                    <Fragment key={index}>
                        <h3>{el}</h3>
                    </Fragment>
                )
            })}

        </>
    )
}