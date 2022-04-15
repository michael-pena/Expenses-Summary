import './App.css';
import FileUploader from './components/FileUploader/FileUploader';
import CardBoxContainer from './components/UI/CardBoxContainer';

function App() {
  return (
    <div className="App">
      <CardBoxContainer>
        <h1>Charts</h1>
        </CardBoxContainer>
        <FileUploader />
        <CardBoxContainer>
        <h1>expenses table</h1>
        </CardBoxContainer>   
    </div>
  );
}

export default App;
