import "./App.css";
// importing react router v6.3
import { Routes, Route } from "react-router-dom";
// Paths
import { homePath, loginPath, lostPath } from "./paths";
// Scenes/Components with nested components
import Login from "./components/Login";
import Lost from "./scenes/lost";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={lostPath} element={<Lost />} />
        <Route path={homePath} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
