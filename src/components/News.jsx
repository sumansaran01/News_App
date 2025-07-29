import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

// API Key from environment variables
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// Debug: Check if API key is loaded
console.log("API Key loaded:", API_KEY ? "Yes" : "No");
console.log("API Key value:", API_KEY);
console.log("Test env var:", import.meta.env.VITE_TEST);
console.log("All env vars:", import.meta.env);

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${API_KEY}&page=1&pageSize=${pageSize}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === "error") {
        throw new Error(data.message || "API Error");
      }
      
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
      setPage(1);
      console.log(data);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    updateNews();
  }, [props.category]);

  const fetchMoreData = async () => {
    if (loading) return;
    
    const nextPage = page + 1;
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${API_KEY}&page=${nextPage}&pageSize=${pageSize}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === "error") {
        throw new Error(data.message || "API Error");
      }
      
      setArticles(prevArticles => [...prevArticles, ...(data.articles || [])]);
      setTotalResults(data.totalResults || 0);
      setPage(nextPage);
    } catch (error) {
      console.error("Fetch more data error:", error);
      setError(error.message);
    }
  };
  
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

  const displayArticles = filterText !== "" ? searchResults : articles;

  if (loading && articles.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Error: {error}</div>
          <button 
            onClick={updateNews}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl my-9 font-bold">Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>
      
      <input
        type="text"
        className="block w-[90%] max-w-[500px] mx-auto border p-2 rounded mt-8 border-gray-700"
        value={filterText}
        placeholder="Search News"
        onChange={(e) => setFilterText(e.target.value)}
      />

      {displayArticles.length === 0 && !loading ? (
        <div className="text-center mt-8 text-xl">No articles found</div>
      ) : (
        <InfiniteScroll
          dataLength={displayArticles.length}
          next={fetchMoreData}
          hasMore={displayArticles.length < totalResults && filterText === ""}
          loader={<div className="text-center py-4">Loading more articles...</div>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {displayArticles.map((article, index) => (
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" key={article.url + index}>
                <div>
                  {!article.urlToImage ? (
                    <img
                      src="https://via.placeholder.com/400x200?text=No+Image"
                      className="w-full h-[200px] object-cover"
                      alt="No image available"
                    />
                  ) : (
                    <img
                      src={article.urlToImage}
                      className="w-full h-[200px] object-cover"
                      alt={article.title}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x200?text=Image+Error";
                      }}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 line-clamp-3">{article.title}</h2>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.publishedAt ? article.publishedAt.slice(0, 10) : 'No date'}</span>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default News;
