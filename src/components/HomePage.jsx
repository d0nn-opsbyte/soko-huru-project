import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

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