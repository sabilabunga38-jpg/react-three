import UseEffect from "./assets/components/UseEffect";
import Conditional from "./assets/components/Conditional";
import ListRendering from "./assets/components/ListRendering";
import ProductForm from "./assets/components/ProductForm";
import UserDirectory from "./assets/components/UserDirectory";
// import UserDirectoryMini from "./assets/components/UserDirectoryMini";
import "./app.css";

function App() { 
  return ( 
  <div className="app">
     <UseEffect /> 
     <Conditional /> 
     <ListRendering /> 
     <ProductForm /> 
     <UserDirectory /> 
     </div>
      ); } export default App;