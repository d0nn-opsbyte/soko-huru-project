import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp ({ onSignUp}) {
      const [Username, setUsername] = useState("");
      const [Password, setPassword] = useState("");
      const [Contact, setContact] = useState("");
      const [Address, setAddress] = useState("");
      const [Photo, setPhoto] = useState("");
      const navigate = useNavigate();

   function handleSignup (e) {
    e.preventDefault();

    const newBuyer = {Username, Password, Contact, Address, Photo};


    fetch("http://localhost:3000/Buyers", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newBuyer),
     })
     .then((res) => res.json())
     .then(data => {
        alert("sign up successful");
        setBuyer(data);
        navigate("/");
     });
   }
  
   return(<>
    <form onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input placeholder="Username" 
        value={Username} 
        onChange={(e) => setUsername(e.target.value)}/><br/>
        <input placeholder="Contact (phone or Email)" 
        type="text"
        value={Contact} 
        onChange={(e) => setContact(e.target.value)}/><br/>
        <input placeholder="Address" 
        type="text"
        value={Address} 
        onChange={(e) => setAddress(e.target.value)}/><br/>
        <input placeholder="Image URL" 
        type="text"
        value={Photo} 
        onChange={(e) => setPhoto(e.target.value)}/><br/>
        <input type="password"
        placeholder="Enter Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Sign Up</button>
    </form>

     <p>
    Already signed up ?<Link to="/">Login here</Link>
    </p>
    </>
   );
}


export default SignUp;