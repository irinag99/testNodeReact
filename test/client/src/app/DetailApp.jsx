import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


export function DetailApp() {
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

        </div>
    )
}
