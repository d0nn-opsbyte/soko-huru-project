import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const styles = {
    container: {
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "Georgia, serif",
        maxWidth: "800px",
        margin: "0 auto",
    },

    title: {
        fontSize: "2.5rem",
        color: '#007bff',
        marginBottom: '20px',
        fontweight: 'bold',
        borderBottom: '2px solid #007bff',
        paddingBottom: '10px',
        display: 'inline-block',
    },
    buttonContainer: {
        margin: '20px',
    },

    button: {
        margin: '10px',
        padding: '15px 40px',
        fontSize: '18px',
        cursor: 'pointer',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },

    infoSection: {
        marginTop: '60px',
        padding: '30px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        borderLeft: '4px solid #007bff',
        textAlign: 'left',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    infoSectionTitle: {
        color: '#007bff',
        fontSize: '1.5rem',
        marginBottom: '15px',
},

    infoSectionText: {
        lineHeight: '1.6',
        color: '#333',
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
