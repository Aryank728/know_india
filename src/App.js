import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import IndiaMapPage from "./pages/IndiaMap.jsx";
import StatePage from "./pages/StatePage.jsx"; // Component for individual state pages

function App() {
  console.log("App component rendered");
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<IndiaMapPage />} />
            <Route path="/places/:stateName" element={<StatePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
