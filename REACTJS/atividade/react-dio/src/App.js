import Item from "./components/Item";
import Card from "./components/Card";
import Dinamic from "./components/Dinamic";

const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação em React</h1>
    <ul>
      <Item>Item 1</Item>
      <Item>Jackson</Item>
      <Item>Hello World</Item>
    </ul>
    <Card/>
    <Dinamic/>
    </>    
  )
}

export default App;