import React, {useState} from "react";

function Login ({ onLogin }) {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

     fetch("http://localhost:4000/Buyers", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newUser)
     })
     .then((res) => res.json())
     .then(buyers => {
        const found =buyers.find(
            b => b.username === username && b.password === password
        );
        if (found) {
            onLogin(found);
            alert("Login successful");

            setUsername("");
            setPassword("");
        }else{
            alert("invalid username or password")
        }   
     });
   }
  
   return(
    <form onSubmit={handleSubmit}>
        <h2>buyer Login</h2>
        <input placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/><br/>
        <input type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Login</button>
    </form>
   );
  }    

  export default Login;