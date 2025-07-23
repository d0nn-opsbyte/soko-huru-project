import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerPage = () => {
    const navigate = useNavigate();
return (
    <div>
        <nav style={{
            backgroundColor: '#f8f9fa',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'flex-end',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
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
        <div style={{padding: '20px'}}>
            <h2>Buyer Page</h2>
            <p>This is where buyers will login their details to view the items being sold.</p>
            {/*Add Buyer-specific navbar and content here*/}
        </div>
    </div>
);
};

export default BuyerPage;
       