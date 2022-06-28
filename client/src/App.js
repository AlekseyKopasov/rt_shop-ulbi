import AppRouter from './components/AppRouter'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
