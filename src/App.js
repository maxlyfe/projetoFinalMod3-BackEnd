import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TarefAdd from './pages/TarefaAdd/TarefAdd';
import TarefaEdit from './pages/TarefaEdit/TarefEdit';
import TarefaView from './pages/TarefaViwe/TarefView';
import TarefEdit from './pages/TarefaEdit/TarefEdit';
import TarefView from './pages/TarefaViwe/TarefView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/add" component={TarefAdd}/>
        <Route path="/edit/:id" component={TarefEdit}/>
        <Route path="/view/:id" component={TarefView}/>
      </Switch>
    </div>
  );
}

export default App;
