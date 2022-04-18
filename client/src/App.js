import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import FileUploader from "./components/FileUploader/FileUploader";
import CardBoxContainer from "./components/UI/CardBoxContainer";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import ChartSection from "./components/Charts/ChartSection";

function App() {
  return (
    <div className="App">
      <ChartSection />
      <FileUploader />
      <Expenses />
    </div>
  );
}

export default App;
