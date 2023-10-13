import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <img
              src="loader.svg"
              alt="loading"
              className="loader my-15 mx-auto"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
