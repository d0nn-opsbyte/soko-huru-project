import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


function Login ({ setBuyer }) {
      const [Username, setUsername] = useState("");
      const [Password, setPassword] = useState("");
      const navigate =useNavigate();


  function handleSubmit(e) {
    e.preventDefault();

     fetch("http://localhost:3000/Buyers")
     .then((res) => res.json())
     .then(buyers => {
        const found =buyers.find(
            b => b.Username === Username && b.Password === Password
        );
        if (found) {
            setBuyer(found);
            alert("Login successful");
            navigate("/products");

            setUsername("");
            setPassword("");
        }else{
            alert("invalid username or password")
        }   
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

 
   return(
   <div style={styles.container}>
    <form onSubmit={handleSubmit}>
        <h2>buyer Login</h2>
        <input placeholder="Username" 
        value={Username} 
        onChange={(e) => setUsername(e.target.value)}/><br/>
        <input type="password"
        placeholder="Enter Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Login</button>
    </form>

    <p styles={styles.link}>
        No account?<Link to="/signup">Sign up here</Link>
    </p>
    </div>
   );
  }    

  export default Login;