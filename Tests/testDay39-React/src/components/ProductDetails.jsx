import { Fragment } from "react"

export default function ProductDetails({products}){
    return(
        
        
        <table border={5} cellSpacing={2} cellPadding={30}>
            <thead>
                <tr>
                <th>NAME</th>
                <th>PRICE</th>
                <th>DESCRIPTION</th>
                </tr> 
            </thead>
            
            <tbody>
                <>
                {products.map((product,index)=>{
                    return(
                        <Fragment key={index}>
                            <tr>
                                <td>{product.pname}</td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                            </tr>
                        </Fragment>
                    )  
                })}
                </>
                
            </tbody> 
                              
        </table>
        
    )
    
}