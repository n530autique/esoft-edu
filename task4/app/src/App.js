

import './App.css';
import { CountdownTimer } from './components/CountdownTimer'
import { UserList } from './components/UserList'
import { Window } from './components/Window'


function App() {

  
  

  return (
    <div className="App">
      <CountdownTimer start={10}/>
      <UserList />
      <Window />
    </div>
  );
}

export default App;
