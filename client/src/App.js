import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import FileUploader from "./components/FileUploader/FileUploader";
import CardBoxContainer from "./components/UI/CardBoxContainer";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

function App() {
  return (
    <div className="App">
      <CardBoxContainer>
        <h1>Charts</h1>
      </CardBoxContainer>
      <FileUploader />
      <CardBoxContainer>      
          <Expenses />        
      </CardBoxContainer>
    </div>
  );
}

export default App;
