import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Search from './pages/search';
import About from "./pages/about";
import Details from "./pages/details";
import Filter from "./pages/filter";

function App() {
  return (
    <main className="min-h-screen w-screen bg-primary font-sans">
      <Router basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
