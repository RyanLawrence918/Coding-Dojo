import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from './components/Form';
import Info from './components/Info';

function App() {
  return (
    <div className="App container">
      <h1>Star Wars Api</h1>
      <Form></Form>
      <Routes>
        <Route path="/:category/:id" element={<Info></Info>}></Route>
      </Routes>
    </div>
  );
}

export default App;
