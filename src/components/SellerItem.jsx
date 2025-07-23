import ProductItem from "./ProductItem"

function SellerItem({seller}){
  console.log(seller.Products)
    return(
   <div>
    <h2>seller Name: {seller.Sellername}</h2>
    <p>contact: {seller.Contact}</p>
    <p>{seller.Address}</p>
    <div>{(seller.Products).map((product)=>(
        <ProductItem key={seller.productId} product={product} />
    ))}</div>

   </div>
    )
}
export default SellerItem