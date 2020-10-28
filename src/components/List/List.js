import Article from '../Article/Article'

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

    return (
        <div>
            <Article article={arts[0]} />
            {arts.map(art => <Article article={art} foo='bar' key={art.id} />)}
        </div>
    )
}

export default List;