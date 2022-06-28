import AppRouter from './components/AppRouter'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
