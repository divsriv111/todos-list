import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

function App() {
  let todos = [
    {
      sno1: 1,
      title: "Go to the market",
      description: "Go to the weekend market shopping"
    },
    {
      sno1: 2,
      title: "Go to the mall",
      description: "Go to the weekend market shopping"
    },
    {
      sno1: 3,
      title: "Go to the Ghat",
      description: "Go to the weekend market shopping"
    }
  ]

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
