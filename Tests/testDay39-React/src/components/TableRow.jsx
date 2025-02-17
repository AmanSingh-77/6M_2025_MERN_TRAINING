import { Fragment } from "react"

export default function TableRow(props){
    return(
    
    <tbody>
      <tr>
        <td>{props[0].pname}</td>
        <td>{props[0].price}</td>
        <td>{props[0].desc}</td>
       </tr> 

       <tr>
        <td>{props[1].pname}</td>
        <td>{props[1].price}</td>
        <td>{props[1].desc}</td>
       </tr>   

       <tr>
        <td>{props[2].pname}</td>
        <td>{props[2].price}</td>
        <td>{props[2].desc}</td>
       </tr>    
       </tbody>
        
    
    )
}
