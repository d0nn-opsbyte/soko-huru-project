

function SellerItem({product, sellerProducts, setSellerProducts, sellerId}) {
    const baseURL = 'http://localhost:3000/Sellers';

    function handleDelete(event) {
        const productId = event.target.id;
        const updatedProducts = sellerProducts.filter(product => product.productId !== parseInt(productId));
        fetch(`${baseURL}/${sellerId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Products: updatedProducts})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error deleting product');
            }
            setSellerProducts(updatedProducts);
        })
        .catch(error => console.error('Error:', error));
    }

    return(
        <div style={{border:"1px solid black", padding:"20px", borderRadius:"10px", textAlign:"center", width:"250px"}}>
        <img src={product.image} style={{height:"200px", width:"200px", border:"1px solid black"}}/>
        <h4>{product.name}</h4>
        <p>Price: Ksh {product.price}</p>
        <p>{product.description}</p>
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
            <button style={{backgroundColor:"rgba(218, 21, 14, 0.78)", color:"white", padding:"10px", borderRadius:"5px", border:"1px solid black", cursor:"pointer",display:"flex", alignItems:"center"}}>Edit   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></button>
            <button onClick={handleDelete} id={product.productId} style={{backgroundColor:"rgba(218, 21, 14, 0.78)", color:"white", padding:"10px", borderRadius:"5px", border:"1px solid black", cursor:"pointer", display:"flex", alignItems:"center"}}>Delete <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
        </div>
        </div>
    )
}

export default SellerItem;