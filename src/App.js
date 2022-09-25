import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      
      <ImageList />
      <hr></hr>
      <SearchBar />
    </div>
  );
}

export default App;
