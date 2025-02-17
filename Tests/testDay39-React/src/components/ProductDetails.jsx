import TableRow from "./TableRow";

export default function ProductDetails(props){
    return(
        
        
        <table border={5} cellSpacing={2} cellPadding={30}>
            <thead>
                <tr>
                <th>NAME</th>
                <th>PRICE</th>
                <th>DESCRIPTION</th>
                </tr> 
            </thead>
            <TableRow {...props}/> 
                              
        </table>
        
    )
    
}