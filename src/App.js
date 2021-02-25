import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Games from './components/Games'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

function App() {
  return (
		<Router>
			<div className="App">

			</div>
			<Route exact path='/' component={Games}/>
		</Router>
  );
}

export default App;
