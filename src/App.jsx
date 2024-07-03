//774ebf8668b84c88a712900f590429c6 api

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'
import Header from "./components/Header"
import News from "./components/News"

const App = () => {
  return (
    <div>
      <Router>
          <Header />
          {/*<LoadingBar />*/}
          <Routes>
            <Route exact path="/newsapp" element={<News />} />

            
           
          </Routes>
        </Router>
    </div>
  )
}

export default App
