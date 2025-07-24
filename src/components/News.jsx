import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize] = useState(10);
  const [filterText, setFilterText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d00863c04b9f46eca807b41150587ded&page=${page}&pageSize=${pageSize}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
        setTotalResults(data.totalResults || 0);
    } catch (error) {
        console.error("Fetch error:", error);
      }
  };

  const fetchMoreData = async () => {
    const newPage = page + 1;
    setPage(newPage);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d00863c04b9f46eca807b41150587ded&page=${newPage}&pageSize=${pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles([...articles, ...data.articles]);
    setTotalResults(data.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  useEffect(() => {
    if (filterText !== "") {
      const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setSearchResults(filteredArticles);
    } else {
      setSearchResults([]);
    }
  }, [filterText, articles]);

  return (
    <div>
      <h1 className="text-center text-2xl my-9 font-bold">Top Headlines</h1>

      <input
        type="text"
        className="block w-[90%] max-w-[500px] mx-auto border p-2 rounded mt-8 border-gray-700"
        value={filterText}
        placeholder="Search News"
        onChange={(e) => setFilterText(e.target.value)}
      />

      <InfiniteScroll
{/*         dataLength={articles.length} */}
        dataLength={articles?.length || 0}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 p-3">
          {((searchResults.length === 0 ? articles : searchResults) || []).map((article) => (
            <div className="border border-gray-300 relative hover:transform" key={article.url}>
              <div>
                {article.urlToImage === null ? (
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
                <h1 className="text-center mt-9 ">{article.title.slice(0, 80)}...</h1>
              </div>
              <div className="w-full px-2 flex items-center justify-between">
                <p className="text-center text-xs p-3 text-gray-500">{article.publishedAt.slice(0, 10)}</p>
                <Link to={article.url} className="py-4 text-gray-500 underline flex justify-center hover:transform hover:text-black cursor-pointer" style={{ transition: "1s all ease" }}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
