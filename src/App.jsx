//Dependencies
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Components
import { SearchParams } from './components/SearchParams';
import { Detail } from './components/Detail';

const App = () => (
  <div>
    <BrowserRouter>
      <header>
        <Link to="/">Adop Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
