
function ProductItem({product}){
    console.log(product)
    return(
        <div style={{border:"3px solid blue", textAlign:"center", width:"300px"}}>
          <h3>{product.name}</h3>
          <img src={product.image} style={{height: "200px", width: "200px"}}/>
          <p><strong>{product.description}</strong></p>
          <p>ksh {product.price}</p>
        </div>
    )
}
export default ProductItem