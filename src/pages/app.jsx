import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/navbar/navbar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
