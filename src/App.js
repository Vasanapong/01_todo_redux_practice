import './App.css';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import ViewTask from './components/ViewTask';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <ViewTask/>
      <EditTask/>
    </div>
  );
}

export default App;
