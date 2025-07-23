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

            setUsername("");
            setPassword("");
        }else{
            alert("invalid username or password")
        }   
     });
   }
   
  
   return(
   <div>
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

    <p>
        No account?<Link to="/signup">Sign up here</Link>
    </p>
    </div>
   );
  }    

  export default Login;