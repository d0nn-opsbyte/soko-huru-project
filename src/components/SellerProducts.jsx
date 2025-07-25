import ProductItem from "./ProductItem"

function SellerProducts({seller}){
  console.log(seller.Products)

const styles = {
    sellerBox: {
      textAlign: "center",
      backgroundColor: "#ffffff",
      border: "1px solid #99c2ff",
      borderRadius: "10px",
      padding: "20px",
      margin: "20px auto",
      maxWidth: "900px",
      boxShadow: "0 4px 8px rgba(0,123,255,0.1)",
    },
    sellerName: {
      color: "#0056b3",
      fontSize: "20px",
      marginBottom: "10px",
    },
    productList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center", 
      gap: "20px",
      marginTop: "20px",
    },
  };

    return(
   <div style={styles.sellerBox}>
    <h2 style={styles.sellerName}>Name of Seller: {seller.Sellername}</h2>
    <p>Contact: <strong>{seller.Contact}</strong></p>
    <p>Physical Address: <strong>{seller.Address}</strong></p>
    <div style={styles.productList}>{(seller.Products).map((product)=>(
        <ProductItem key={seller.productId} product={product} />
    ))}</div>

   </div>
    )
}
export default SellerProducts