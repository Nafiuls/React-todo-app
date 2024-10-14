import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </div>
  );
};

export default App;
