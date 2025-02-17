// Create a product card that displays product details like name, price, and description. Pass these details as props from a parent component. Call it for 3 different product. Use destructuring method and external css for this


import "./styles/ProductCard.css"
export default function ProductCard({productName, productPrice, productDesc}){
    return(
        <div className="productCard">
            <span className="label">Name:</span>
            <span>{productName}</span>
            <br/>
            <span className="label">Price:</span>
            <span>{productPrice}</span>
            <br/>
            <span className="label">Description:</span>
            <span>{productDesc}</span>
        </div>
    )
}