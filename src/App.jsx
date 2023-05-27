//Dependencies
import { createRoot } from 'react-dom/client';

//Components
import { SearchParams } from './components/SearchParams';

const App = () => (
  <div>
    <h1>Adopt me!</h1>
    <SearchParams />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
