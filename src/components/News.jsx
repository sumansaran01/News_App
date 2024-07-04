import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY

const News = (props) => {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=774ebf8668b84c88a712900f590429c6`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    console.log(data);
  };
  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl my-9 font-bold">Top Headlines</h1>
      
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 p-3">
        {articles.map((article) => (
          <div className="border border-gray-300 relative" key={article.id}>
            <div>
              {!article.urlToImage ? (
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.-mlwDVsSwfABKmZBtIBbtQHaFY&pid=Api&P=0&h=180"
                  className="w-full h-[200px] object-cover"
                  alt=""
                />
              ) : (
                <img
                  src={article.urlToImage}
                  className="w-full h-[200px] object-cover"
                  alt=""
                />
              )}
            </div>
            <div>
              <h1 className="text-center mt-9 ">{article.title.slice(0,80)}...</h1>
            </div>
            <div className="w-full px-2 flex  items-center justify-between">

            <p className="text-center text-xs p-3 text-gray-500">{article.publishedAt.slice(0,10)}</p>
            <Link to={article.url} className=" py-4 underline flex justify-center hover:font-bold cursor-pointer " style={{transition:"0.5s all ease"}}>Read more</Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
