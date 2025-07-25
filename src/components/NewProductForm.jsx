import {useState} from 'react';

function NewProductForm({sellerProducts, setSellerProducts, sellerId}) {
    const[formData, setFormData] = useState({
        productId: '',
        name: '',
        price: '',
        image: '',
        description: ''
    });
    const baseURL = 'https://soko-huru-json-server.onrender.com/Sellers';

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log("Form Data:", formData);
     }
    
     async function handleSubmit(event) {
        event.preventDefault();
        const newProduct = {
            productId: parseInt(formData.productId),
            name: formData.name,
            price: parseInt(formData.price),
            image: formData.image,
            description: formData.description
        };
        console.log("New Product Data:", newProduct);
        const updatedProducts = [...sellerProducts, newProduct];
        try {
            const response =await fetch(`${baseURL}/${sellerId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({Products: updatedProducts})
            })
            if (!response.ok) {
                throw new Error('Error adding new product');
            }
            setSellerProducts(updatedProducts);
            setFormData({
                productId: '',
                name: '',
                price: '',
                image: '',
                description: ''
            });
        }catch (error) {console.error('Error:', error);         
     }
    }   


    return (
        <>
        <hr />
         <h2 style={{textAlign:"center", color:"#007bff"}}>Add a New Product</h2><hr/>
         <form  onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap", width:"250px", border:"1px solid black", padding:"30px", borderRadius:"10px", textAlign:"center", margin:"auto"}}>

              <label htmlFor="productId" style={{display:"block", textAlign:"center"}}><strong>Special Id:</strong></label>
              <input onChange={handleChange} value={formData.productId} name="productId" id="productId" type="number" placeholder='six digits: e.g 123456' style={{width:"200px", padding:"5px", textAlign:"center" ,marginTop:"0px", border:"1px solid #007bff", borderRadius:"15px"}} required/>

              <label htmlFor="name" style={{display:"block", textAlign:"center"}}><strong>Product Name:</strong></label>
              <input  onChange={handleChange} value={formData.name} name="name" id="name" type="text" placeholder='Enter product name' required
               style={{width:"200px", padding:"5px", textAlign:"center" ,marginTop:"0px", border:"1px solid #007bff", borderRadius:"15px"}}></input>

              <label htmlFor="price" style={{display:"block", textAlign:"center"}}><strong>Product Price:</strong></label>
              <input  style={{width:"200px", padding:"5px", textAlign:"center" ,marginTop:"0px", border:"1px solid #007bff", borderRadius:"15px"}}  onChange={handleChange} value={formData.price} name="price" id="price" type="number" placeholder='50000' required/>

              <label htmlFor='image' style={{display:"block", textAlign:"center"}}><strong>Product Image:</strong></label>
              <input  style={{width:"200px", padding:"5px", textAlign:"center" ,marginTop:"0px", border:"1px solid #007bff", borderRadius:"15px"}} onChange={handleChange} value={formData.image} name="image" id="image" type="url" placeholder="image URL" required/>

              <label htmlFor="description" style={{display:"block", textAlign:"center"}}><strong>Description:</strong></label>
              <input  style={{width:"200px", padding:"5px", textAlign:"center" ,marginTop:"0px", border:"1px solid #007bff", borderRadius:"15px"}} onChange={handleChange} value={formData.description} name="description" id="description" placeholder='Enter product description' required/>

              <button type="submit" style={{backgroundColor:"#007bff", color:"white", padding:"10px", borderRadius:"5px", border:"none", cursor:"pointer", margin:"20px"}}>Add Product</button>
          </form>
        </>
    )
}

export default NewProductForm;