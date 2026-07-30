import UseEffect from "./assets/components/UseEffect";
import Conditional from "./assets/components/Conditional";
import ListRendering from "./assets/components/ListRendering";
import ProductForm from "./assets/components/ProductForm";
import "./app.css";

function App() {
  return (
    <div className="app">
      <UseEffect />
      <Conditional />
      <ListRendering />
      <ProductForm/>
    </div>
  );
}

export default App;