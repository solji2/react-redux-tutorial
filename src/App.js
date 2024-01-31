import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
