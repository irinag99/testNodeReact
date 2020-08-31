import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export function DetailApp() {
    const [quantity, setQuantity] = useState(0);
    const history = useHistory();

    const handleDelete = () => {
        const miInit = {
            method: 'DELETE',
            body: JSON.stringify({ idApps: app.id }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(`http://localhost:3000/apps/${app.id}/delete`, miInit)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => processDelete(response));
    }

    const processDelete = (response) => {
        if (response?.errors?.length > 0) {
            console.log(response.errors);
        } else {
            history.push('/apps');
        }
    }

    const handleAddCart = () => {
        if (quantity > 0) {
            const miInit = {
                method: 'POST',
                body: JSON.stringify({ token: sessionStorage.getItem('token'), quantity, idApps: app?.id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            fetch('http://localhost:3000/apps/add', miInit)
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => processResponse(response));
        }
    }


    const processResponse = (response) => {
        if (response?.errors?.length > 0) {
            console.log(response.errors);
        } else {
            history.push('/cart');
        }
    }

    const [app, setApp] = useState()
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/apps/${id}`)
            .then(function (app) {
                return app.json();
            })
            .then(function (app) {
                console.log(app)
                setApp(app)
            });
    }, [id])

    return (
        <div className="App">
            <h1>App</h1>
            <h3>{app?.name}</h3>
            <p>{app?.description}</p>
            <input type="text" name='quantity' onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={handleAddCart}>Agregar al carrito</button>
            <button onClick={handleDelete}>Eliminar</button>
            <button>Editar</button>
        </div>
    )
}
