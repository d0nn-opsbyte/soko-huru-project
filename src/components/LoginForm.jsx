import { useState } from "react"
import { useNavigate } from "react-router-dom";

function LoginForm({setSeller}){
    const baseURL = `http://localhost:3000/Sellers`;
    const navigate= useNavigate();
    const [loginFormData, setLoginFormData] = useState({
        Sellername: "",
        Password: ""
    });

    const [signUpFormData, setSignUpFormData] = useState({
        Sellername: "",
        Password: "",
        Contact: "",
        Address: "",
    });

    const [error, setError] = useState("")

    function handleChange(event){
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
    }

    function signupChange(event){
        setSignUpFormData({
            ...signUpFormData,
            [event.target.name]: event.target.value
        });
        console.log(signUpFormData);
    }

    function handleSignUp(event){
        event.preventDefault();
        const confirmMessage = confirm("Do you want to signup with this data?");
        if(!confirmMessage){ return }

        const newSeller = {
            Sellername: signUpFormData.Sellername,
            Password: signUpFormData.Password,
            Products: [],
            Contact: signUpFormData.Contact,
            Address: signUpFormData.Address
        };

        fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSeller)
        }).then(() => setSignUpFormData({
            Sellername: "",
            Password: "",
            Contact: "",
            Address: "",
        }));
    }

    async function handleLogin(event){
        event.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/Sellers?Sellername=${loginFormData.Sellername}&Password=${loginFormData.Password}`);
            const data = await res.json();
            if (data.length > 0){
                setSeller(data[0]);
                localStorage.setItem('seller', JSON.stringify(data[0]));
                setError('');
                setLoginFormData({ Sellername: "", Password: "" });
            } else {
                setError('Invalid seller name or password');
                setSeller(null);
                localStorage.removeItem('seller');
                alert("wrong password or username");
            }
        } catch(err){
            setError('Login error');
            console.error(err);
        }
    }

    const formStyle = {
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        color: "#333",
        fontFamily: "Arial, sans-serif"
    };

    const labelStyle = {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
        color: "#007bff"
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "4px",
        border: "1px solid #ccc"
    };

    const buttonStyle = {
        display: "block",
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px"
    };

    const headingStyle = {
        textAlign: "center",
        color: "#007bff"
    };

    return(
        <div style={formStyle}>
             <nav style={{
             
        }}>
            <button 
            onClick={() => navigate('/')}
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
            }}>
                Home
            </button>
            
        </nav>
            <h2 style={headingStyle}>Seller Login</h2>
            <form onSubmit={handleLogin}>

                <label htmlFor="name" style={labelStyle}><strong>Username:</strong></label>
                <input onChange={handleChange} value={loginFormData.Sellername} name="Sellername" id="name" type="text" placeholder='Enter Seller Name' required style={inputStyle}></input>

                <label htmlFor="name" style={labelStyle}><strong>Password:</strong></label>
                <input onChange={handleChange} value={loginFormData.Password} name="Password" id="Password" type="password" placeholder='Enter Password' required style={inputStyle}></input>

                <button style={buttonStyle}>Log in</button>
            </form>

            <h2 style={headingStyle}>No Account?</h2>
            <h3 style={headingStyle}>Sign Up here</h3>

            <form onSubmit={handleSignUp}>
                <label htmlFor="Sellername" style={labelStyle}><strong>Name of Seller:</strong></label>
                <input onChange={signupChange} value={signUpFormData.Sellername} name="Sellername" id="Sellername" type="text" placeholder='Enter Seller Name' required style={inputStyle}></input>

                <label htmlFor="Password" style={labelStyle}><strong>Set a password:</strong></label>
                <input onChange={signupChange} value={signUpFormData.Password} name="Password" id="Password" type="text" placeholder='at least six characters' required style={inputStyle}></input>

                <label htmlFor="Contact" style={labelStyle}><strong>Your Contact</strong></label>
                <input onChange={signupChange} value={signUpFormData.Contact} name="Contact" id="Contact" type="text" placeholder='eg 0789654734' required style={inputStyle}></input>

                <label htmlFor="Address" style={labelStyle}><strong>Physical Address:</strong></label>
                <input onChange={signupChange} value={signUpFormData.Address} name="Address" id="Address" type="text" placeholder='e.g Kariokor, Nairobi' required style={inputStyle}></input>

                <button style={buttonStyle}>Sign Up</button>
            </form>
        </div>
    )
}
export default LoginForm
