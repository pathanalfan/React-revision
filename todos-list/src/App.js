import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header"
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  let todos=[
    {
      sno:1,
      title:"Make React Project",
      desc:"Make a Todo List React Project1"
    },
    {
      sno:2,
      title:"Make React Project",
      desc:"Make a Todo List React Project2"
    },
    {
      sno:3,
      title:"Make React Project",
      desc:"Make a Todo List React Project3"
    }
  ]
  return (
    <>
    <Header title="Todos-app" searchBar={true}/>
    <Todos todos={todos}/>
    <Footer/>

    </>
  );
}

export default App;
