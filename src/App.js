import Metrics from "./components/Metrics";
import Sidebar from "./components/Sidebar";
import "./scss/index.scss";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Metrics />
    </div>
  );
}

export default App;
