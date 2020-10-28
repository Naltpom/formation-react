import Article from '../Article/Article'
import CarItem from '../CarItem/CarItem'

function List() {
    
  const arts = [
        {
            "id": 1,
            "title": "Article 1",
            "category": "News",
            "published": true,
            "content": "Lorem ipsum delor sit amet.",
        },
        {
            "id": 2,
            "title": "Article 2",
            "category": "News",
            "published": false,
            "content": "Lorem ipsum delor sit amet.",
        },
        {
            "id": 3,
            "title": "Article 3",
            "category": "Blog",
            "published": true,
            "content": "Lorem ipsum delor sit amet.",
        },
    ];
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
            <Article article={arts[0]} />
            {arts.map(art => <Article article={art} foo='bar' key={art.id} />)}
            <div className="p-3">Liste des produits</div>
            {products.map(product => <CarItem produit={product}  key={product.id} />)}
        </div>
    )
}

export default List;