import { FiltersLayout } from './Layouts';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FiltersLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
