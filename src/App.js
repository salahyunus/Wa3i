import "./App.css";
// importing react router v6.3
import { Routes, Route } from "react-router-dom";
// Paths
import { homePath, lostPath, mainPath } from "./paths";
// Scenes/Components with nested components
import Login from "./scenes/login";
import Lost from "./scenes/lost";
import Header from "./components/global/Header";
import Home from "./scenes/home";
import Details from "./scenes/details";
function App() {
  return (
    <div className="App">
      {/* Add Header to all pages above Routes */}
      <Header />
      <Routes>
        <Route path={lostPath} element={<Lost />} />
        <Route path={mainPath} element={<Login />} />
        <Route path={homePath} element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
