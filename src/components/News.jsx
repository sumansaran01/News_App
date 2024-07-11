
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // suru mein first page rhega esiliye 1 set kr diya hun.
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // yahan pe ek page mein kitna news rkhna chahte ho wo set krna hai to mein 10 kr diyaho gaya
  const [pageSize, setPageSize] = useState(10);
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d00863c04b9f46eca807b41150587ded&page=${page}&pageSize=${pageSize}`; //newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d00863c04b9f46eca807b41150587ded&page=${page}&pageSize=${pageSize};

    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    // Api Fetched Successfully...
    setTotalResults(data.totalResults);
    // console.log(data);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d00863c04b9f46eca807b41150587ded&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const [filtertext, setFilterText] = useState("");
  // storing search results 
  const [SearchContainer, setSearchContainer] = useState([]);

  const handleSearch = () => {
    if (filtertext !== "") {
      const newFilter = articles.filter((value) => 
        value.title.toLowerCase().includes(filtertext)
      );
      setSearchContainer(newFilter);

      console.log(SearchContainer);
    } 
  }
  useEffect(() => {
    handleSearch();
  }, [filtertext]);
  return (
    <div>
      <h1 className="text-center text-2xl my-9 font-bold">Top Headlines</h1>


      <input type="text" name="" id="" className="block w-[90%] max-w-[500px] mx-auto border p-2 rounded mt-8 border-gray-700" value={filtertext} placeholder="Search News" onChange={(e) => {setFilterText(e.target.value);
    
      }}/>

      <button className="block w-[100px] mx-auto bg-gray-200 text-black hover:bg-white hover:border border-gray-300 shadow-3xl font-semibold py-2  mt-5 px-4 rounded mb-9 " onClick={handleSearch} style={{transition:"0.4s all ease"}}>Search</button>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 p-3">
          {
            SearchContainer.length ===0 ? articles.map((article) => (
              <div className="border border-gray-300 relative hover:transform" key={article.url}>
                <div>
                  {article.urlToImage===null ? (
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
                <div className="w-full px-2 flex  items-center justify-between">
  
                  <p className="text-center text-xs p-3 text-gray-500">{article.publishedAt.slice(0, 10)}</p>
                  <Link to={article.url} className=" py-4 text-gray-500 underline flex justify-center hover:transform hover:text-black hover: cursor-pointer " style={{ transition: "1s all ease" }}>Read more</Link>
                </div>
  
              </div>
            )):SearchContainer.map((article) => (
              <div className="border border-gray-300 relative hover:transform" key={article.url}>
                <div>
                  {article.urlToImage===null ? (
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
                <div className="w-full px-2 flex  items-center justify-between">
  
                  <p className="text-center text-xs p-3 text-gray-500">{article.publishedAt.slice(0, 10)}</p>
                  <Link to={article.url} className=" py-4 text-gray-500 underline flex justify-center hover:transform hover:text-black hover: cursor-pointer " style={{ transition: "1s all ease" }}>Read more</Link>
                </div>
  
              </div>
            ))
          }

          
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;

