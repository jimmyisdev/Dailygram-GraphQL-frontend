import Tasks from "components/Tasks";
import "./App.css";
import Expenditures from "components/Expenditures";
import PeopleMemos from "components/PeopleMemos";

function App() {

  return (
    <div className="App">
      <Expenditures />
      <Tasks />
      <PeopleMemos />
    </div>
  );
}

export default App;
