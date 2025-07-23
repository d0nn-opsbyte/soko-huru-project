
function ProductItem({product}){
    console.log(product)
    return(
        <div>
          <h3>{product.name}</h3>
          <img src={product.image}/>
          <p>{product.description}</p>
          <p>ksh  {product.price}</p>
        </div>
    )
}
export default ProductItem