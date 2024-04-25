import './App.css';
import Welcome from './components/welcome/Welcome';
import selected from "./img/selected.png";
import Clock from './components/clock/Clock';
import Form from './components/form/Form';

function App() {
  var props = {
    user: {
      avatarUrl: selected,
      name: 'Lucie Scholzová' 
    },
    date: '22.04.2024',
    text: 'Welcome'
  }

  return (
    <div className="App" id='App'>
      <Clock/>
      <Welcome props={props}/>
      <Form/>
    </div>
  );
}

export default App;
