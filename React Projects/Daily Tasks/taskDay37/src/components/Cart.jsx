//   Create a shopping cart in form of table that displays details of a shopping cart item, including name, price, and quantity. Pass these details as props from a parent component. Show two cart items.

export default function Cart({itemName, itemPrice, itemQuantity}){
    return(
        <table border={"5px solid black"} cellPadding={'10px'} style={{margin:'auto', marginBottom:'10px'}}>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{itemName}</td>
                <td>{itemPrice}</td>
                <td>{itemQuantity}</td>
                </tr>
            </tbody>
        </table>
    )
}