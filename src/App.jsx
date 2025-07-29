//774ebf8668b84c88a712900f590429c6 api

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";

const App = () => {
  //Set Dark mode
  const [mode, setmode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Router>
        <Header mode={mode} setmode={setmode} handleMode={handleMode} />
        {/*<LoadingBar />*/}
        <Routes>
          <Route
           exact path="/business"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="business"
              />
            }
          />
          <Route
            path="/"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="general"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="general"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="science"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="health"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                mode={mode}
                setmode={setmode}
                handleMode={handleMode}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
