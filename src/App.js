import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarApp from "./components/NavbarApp";

function App() {
  const mensaje = "Bienvenidos a Librería El trébol"; //* Las variables siempre van en minuscula
  return (
    <div>
      <NavbarApp />
      <ItemListContainer greeting={mensaje} contenedor="contenedor" />
      {
        //* Las props siempre van en minuscula!
      }
    </div>
  );
}

export default App;
