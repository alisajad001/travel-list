import Form from "./components/Form";
import Logo from "./components/Log";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
