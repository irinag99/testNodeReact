import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


export function DetailCategory() {
    const [category, setCategory] = useState()
    let { id } = useParams()
    useEffect(() => {
        console.log(`http://localhost:3000/categories/${id}`)
        fetch(`http://localhost:3000/categories/${id}`)
            .then(function (category) {
                return category.json();
            })
            .then(function (category) {
                console.log(category)
                setCategory(category)
            } );
    }, [id])

    return (
        <div className="Category">
            <h1>Categoria</h1>
            <h3>{category?.name}</h3>
            <p>{category?.description}</p>
            <h3>Apps</h3>
            
            <ul> {category && category.apps.map((c, index) => {
                return (
                    <li key={index}>
                        <Link to={`/apps/${category.id}`}> 
                        {c.name}
                        </Link>
                    </li>
                )
            })}
            </ul>

        </div>
    )
}
