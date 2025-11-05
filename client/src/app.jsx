import Heatmap from "./components/heatmap";
import "./styles/styles.css";

function App() {
  return (
    <div className="dashboard-container">
      <Heatmap />
      <div className="dashboard-title">OpenSense Dashboard</div>
    </div>
  );
}

export default App;
