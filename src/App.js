import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import MyInfo from "./MyInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
              <h1>Мій перший React-застосунок</h1>
              <p>Вітаю! Це мій перший проєкт на React.</p>
          </div>
          <Hello />
          <MyInfo />
      </header>
    </div>
  );
}
export default App;
