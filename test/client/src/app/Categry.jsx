import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Category() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(function (categories) {
                return categories.json();
            })
            .then(function (categories) {
                setCategories(categories)
            });
    }, [])

    return (
        <div className="Categories">
            <h1>Categorias</h1>

            <ul> {categories.map((category, index) => {
                return (
                    <li key={index}>
                        <Link to={`/categories/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                )
            })}
            </ul>

        </div>
    )
}