import SellerNavbar from "../components/SellerNavbar";
import { useState, useEffect } from "react";

function SellerProfile() {
  const sellerId=1
  const[seller,setSeller]=useState([])
  const baseURL= "http://localhost:3000/Sellers"
  
  useEffect(()=>{
    fetch(`${baseURL}/${sellerId}`)
    .then(res=>res.json())
    .then(data=> setSeller(data))
    .catch((error)=>console.error("Error fetching seller:", error))
  },[sellerId])

  const[formData,setFormData]= useState({
   Sellername:"",
   Password:"",
   Contact:"",
   Address:""
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  
  function handleSubmit(event){
    event.preventDefault();
    const newSellerData= {
      id: seller.id,
      Sellername: formData.Sellername|| seller.Sellername,
      Password:formData.Password|| seller.Password,
      Products: seller.Products,
      Contact: formData.Contact|| seller.Contact,
      Address: formData.Address|| seller.Address
    }
    const confirmMessage= confirm("Are you sure you want to make this changes?")
    if(!confirmMessage){return}
    
    fetch(`${baseURL}/${sellerId}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSellerData)
    }).then(setFormData({
       Sellername:"",
       Password:"",
       Contact:"",
       Address:""
    })).catch((error)=>console.error("Error editing user profile:", error))
  }

  return (
    <div className="seller-profile">
      <header>
        <SellerNavbar />
      </header>
      <h1 style={{textAlign:"center"}}>Edit your Profile</h1>
      <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap", width:"250px", border:"1px solid black", padding:"30px", borderRadius:"10px", textAlign:"center", margin:"auto"}}>
            <label htmlFor="Sellername" style={{display:"block" }}><strong>New Seller Name</strong></label>
            <input value={formData.Sellername} onChange={handleChange} name="Sellername" id="Sellername" type="text" placeholder='Enter new Seller name'/>

            <label htmlFor="Password" style={{display:"block" }}><strong>Change password</strong></label>
            <input value={formData.Password} onChange={handleChange} name="Password" id="Password" type="text" placeholder='At least 5 characters'/>

            <label htmlFor="Contact" style={{display:"block" }}><strong>New Contact</strong></label>
            <input value={formData.Contact} onChange={handleChange} name="Contact" id="Contact" type="text" placeholder='eg. 0712342356'/>

             <label htmlFor="Address" style={{display:"block" }}><strong>New Physical Address</strong></label>
            <input value={formData.Address} onChange={handleChange} name="Address" id="Address" type="text" placeholder='e.g Kangemi,Nairobi'/>

            <button type="submit">Submit changes</button>
      </form>
    </div>
  );
}
export default SellerProfile;