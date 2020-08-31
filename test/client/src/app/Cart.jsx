import React, { useState, useEffect } from 'react';

export function Cart() {
    const [cart, setCart] = useState([])

    const processResponse = (response) => {
        console.log(response);
        setCart(response)
    }

    useEffect(() => {
        const token = window.sessionStorage.getItem('token');
        const miInit = {
            method: 'POST',
            body: JSON.stringify({ token: token }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:3000/cart', miInit)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => processResponse(response));
    }, [setCart])

    return (
        <div className="Cart">
            <h1>Cart</h1>
            {cart?.map((app, index) => {
                return (
                    <div key={index}>
                        <p>{app.appName}</p>
                        <p>Quantity: {app.quantity}</p>
                        <p>Price: ${app.price}</p>
                    </div>
                )
            })}
        </div>
    )
}
