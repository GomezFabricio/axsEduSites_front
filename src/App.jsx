import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout/PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout></PublicLayout>} />
      </Routes>
    </Router>
  );
}

export default App;