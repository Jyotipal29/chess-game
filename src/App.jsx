import "./App.css";
import Board from "./components/Board";
function App() {
  return (
    <div className="max-w-[1000px] mx-auto  my-10">
      <h1 className=" text-center  font-bold text-4xl">Chess</h1>

      <Board />
    </div>
  );
}

export default App;
