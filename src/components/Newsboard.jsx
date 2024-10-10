import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!category) {
      console.error('No category provided');
      return;
    }

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    console.log('Fetching URL:', url);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);
        setArticles(data.articles || []); // Handle case where `articles` might be undefined
      })
      .catch(error => console.error('Error fetching news:', error));
  }, [category]);
 
  return (
    <div className='text-center ' >
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">NEWS</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
};

export default Newsboard;
