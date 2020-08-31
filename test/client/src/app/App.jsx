import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Apps() {
    const [apps, setApps] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/apps')
            .then(function (apps) {
                return apps.json();
            })
            .then(function (apps) {
                console.log(apps)
                setApps(apps)
            });
    }, [])

    return (
        <div className="Apps">
            <h1>Apps</h1>
            <button>Agregar app</button>
            <ul> {apps.map((app, index) => {
                return (
                    <li key={index}>
                        <Link to={`/apps/${app.id}`}>
                            {app.name}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}