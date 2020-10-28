import { useState } from "react";
import classnames from "classnames"

import './Article.scss';

function Article(props) {
    const { article } = props;
    const { title, category, published } = article;
    const [ selected, setSelected ] = useState(false);
    const [ counter, setConter ] = useState(0);
    console.log(selected,counter);
    function handleClick() {
        console.log('click', article.id);
        setSelected(!selected);
        setConter(counter + 1);
    }

    return (
        <div className={classnames('Article', {'Article--selected' : selected},'base')} onClick={handleClick}>
            <div className="Article__title title">{title}</div>
            <div>{category}</div>
            <div>{published ? 'Published' : 'Draft'}</div>
            <div>{counter}</div>
        </div>
    );
}

export default Article;