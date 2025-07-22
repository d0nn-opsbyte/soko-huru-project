import React, {useState} from "react";

function SignUp ({ onSignUp}) {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [contact, setContact] = useState("");
      const [address, setAddress] = useState("");
      const [photo, setPhoto] = useState("");

   function handleSubmit (e) {
    e.preventDefault();

    const newUser = {username, password, contact, address, photo};


    fetch("http://localhost:4000/Buyers", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newUser)
     })
     .then((res) => res.json())
     .then(data => {
        onSignUp(data);
        alert("sign up successful");

        setUsername("")
        setContact("")
        setAddress("")
        setPhoto("")
        setPassword("");
     });
   }
  
   return(
    <form onSubmit={handleSubmit}>
        <h2>buyer sign up</h2>
        <input placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/><br/>
        <input placeholder="Contact (phone or Email)" 
        type="text"
        value={contact} 
        onChange={(e) => setContact(e.target.value)}/><br/>
        <input placeholder="Address" 
        type="text"
        value={address} 
        onChange={(e) => setAddress(e.target.value)}/><br/>
        <input placeholder="Image URL" 
        type="text"
        value={photo} 
        onChange={(e) => setPhoto(e.target.value)}/><br/>
        <input type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Sign Up</button>
    </form>
   );
}

export default SignUp;