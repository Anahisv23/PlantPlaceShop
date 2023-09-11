import "./styles.css";
import SearchBar from "./SearchBar";
import Products from "./Products";

export default function App() {
  return (
    <div className="App">
      <h1>Plant Place</h1>
      <h2>Find your new plant at plant place</h2>
      <SearchBar />
      <Products />
    </div>
  );
}
