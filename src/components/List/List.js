import { useState, useEffect } from 'react';
import Article from '../Article/Article'
import CarItem from '../CarItem/CarItem'

function List() {

    const [articles, setArticles] = useState([]);
    const url = 'http://localhost:3001/articles';
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [url, setArticles]);
    const products = [
        {
            "id": 1,
            "name": "Item 1",
            "price": 20,
        },
        {
            "id": 2,
            "name": "Item 2",
            "price": 10,
        },
        {
            "id": 3,
            "name": "Item 3",
            "price": 5,
        },
    ];

    return (
        <div>
            <div className="p-3">Liste des articles</div>
            <Article article={articles} />
            {articles.map(art => <Article article={art} foo='bar' key={art.id} />)}
            <div className="p-3">Liste des produits</div>
            {products.map(product => <CarItem produit={product}  key={product.id} />)}
        </div>
    )
}

export default List;