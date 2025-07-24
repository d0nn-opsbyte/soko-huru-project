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


    fetch('https://soko-huru-json-server.onrender.com/Buyers', {
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

   const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "#e6f0ff",
      border: "1px solid #99c2ff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 123, 255, 0.2)",
      color: "#003366",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #99c2ff",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    link: {
      display: "block",
      marginTop: "10px",
      textAlign: "center",
      color: "#0056b3",
    },
    heading: {
      textAlign: "center",
    },
  };

  
   return(<>
    <form onSubmit={handleSignup} style={styles.container}>
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

     <p style={styles.link}>
    Already signed up ?<Link to="/">Login here</Link>
    </p>
    </>
   );
}


export default SignUp;