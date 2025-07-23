import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    buttonContainer: {
        margin: '20px',
    },
    button: {
        margin: '10px',
        padding: '15px 30px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
    },
    infoSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        borderRadius: '10px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

    return (
        <div>
            <div>
                <div style={styles.container}></div>
                <h1>Welcome to Soko Huru</h1>
                <p>Choose your role to get started.</p>

                <div style={styles.buttonContainer}>
                    <button style={styles.button} onClick={() => navigate("/buyer")}>
                        Buyer
                    </button>
                    <button style={styles.button} onClick={() => navigate("/seller")}>
                        Seller
                    </button>
                </div>
            </div>

            <div style={styles.infoSection}>
                <h3>About this App</h3>
                <p>This is a simple marketplace where buyers can explore products displayed by sellers and can contact them to inquire more about the products of their interest.
                    The platform is designed to be easy to use and efficient for both parties.
                </p>
            </div>
        </div>
    );
};

export default Home;
