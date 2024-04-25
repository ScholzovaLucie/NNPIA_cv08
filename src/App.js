import './App.css';
import NumberList from './components/number/NumberList';
import Welcome from './components/welcome/Welcome';
import selected from "./img/selected.png";
import Clock from './components/clock/Clock';
import Form from './components/form/Form';
import './css/Clock.css';
import './css/Form.css';
import './css/NumberList.css';
import './css/Welcome.css';


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
      <NumberList />
    </div>
  );
}

export default App;
