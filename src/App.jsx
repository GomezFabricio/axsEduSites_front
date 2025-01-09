import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PublicLayout from './layouts/PublicLayout/PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      </Routes>
    </Router>
  );
}

export default App;