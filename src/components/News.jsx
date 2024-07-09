// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import InfiniteScroll from 'react-infinite-scroll-component';

// // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
// // 774ebf8668b84c88a712900f590429c6 - api key

// const News = (props) => {
//   const [articles, setArticles] = useState([]);
  
//   //infinite scroll
//   const [page, setPage] = useState(1);
//   // yahan pe ek page mein kitna news rkhna chahte ho wo set krna hai to mein 10 kr diya
//   const [pageSize, setPageSize] = useState(10);
//   // condition length of infinite scroll, max len
//   const [totalResults, setTotalResults] = useState(0);

//   //
//   const updateNews = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=774ebf8668b84c88a712900f590429c6ded${page}&pageSize=${pageSize}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setArticles(data.articles);
//     // api fetched successfully...
//     setTotalResults(data.totalResults);
//     //console.log(data);
//   };
//   const fetchMoreData = async () => {
//     setPage(page + 1);
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=774ebf8668b84c88a712900f590429c6ded${page}&pageSize=${pageSize}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setArticles(data.articles);
//     // api fetched successfully...
//     setTotalResults(data.totalResults);
//     //console.log(data);
//   };
  



//   useEffect(() => {
//     updateNews();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center text-2xl my-9 font-bold">Top Headlines</h1>
      
//       <InfiniteScroll
//       // 1. dataLength mtlb ek page mein kitna articles hai
//       // 2. next means last page pe jane pr ye function call 
//       // 3. hasMore mtlb jb tk ye condition true hai tb tk infinitre scroll kaam krega
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<h4>Loading...</h4>}
//       >

//         <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 p-3">
//         {articles.map((article) => (
//           <div className="border border-gray-300 relative" key={article.id}>
//             <div>
//               {!article.urlToImage ? (
//                 <img
//                   src="https://tse2.mm.bing.net/th?id=OIP.-mlwDVsSwfABKmZBtIBbtQHaFY&pid=Api&P=0&h=180"
//                   className="w-full h-[200px] object-cover"
//                   alt=""
//                 />
//               ) : (
//                 <img
//                   src={article.urlToImage}
//                   className="w-full h-[200px] object-cover"
//                   alt=""
//                 />
//               )}
//             </div>
//             <div>
//               <h1 className="text-center mt-9 ">{article.title.slice(0,80)}...</h1>
//             </div>
//             <div className="w-full px-2 flex  items-center justify-between">

//             <p className="text-center text-xs p-3 text-gray-500">{article.publishedAt.slice(0,10)}</p>
//             <Link to={article.url} className=" py-4 underline flex justify-center hover:font-bold cursor-pointer " style={{transition:"0.5s all ease"}}>Read more</Link>
//             </div>

//           </div>
//         ))}
//       </div>
      
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default News;



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
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=774ebf8668b84c88a712900f590429c6ded${page}&pageSize=${pageSize}`; //newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d00863c04b9f46eca807b41150587ded&page=${page}&pageSize=${pageSize};

    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    // Api Fetched Successfully...
    setTotalResults(data.totalResults);
    // console.log(data);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=774ebf8668b84c88a712900f590429c6ded${page}&pageSize=${pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl my-9 font-bold">Top Headlines</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 p-3">
          {articles.map((article) => (
            <div className="border border-gray-300 relative hover:transform" key={article.id}>
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
                <h1 className="text-center mt-9 ">{article.title.slice(0, 80)}...</h1>
              </div>
              <div className="w-full px-2 flex  items-center justify-between">

                <p className="text-center text-xs p-3 text-gray-500">{article.publishedAt.slice(0, 10)}</p>
                <Link to={article.url} className=" py-4 text-gray-500 underline flex justify-center hover:transform hover:text-black hover: cursor-pointer " style={{ transition: "1s all ease" }}>Read more</Link>
              </div>

            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;

