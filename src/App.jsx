//Dependencies
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Components
import { SearchParams } from './components/SearchParams';
import { DetailsWithErrorBoundary } from './components/Detail';

const queryClient = new QueryClient({
  defaultOpions: {
    queries: {
      stateTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => (
  <div>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adop Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<DetailsWithErrorBoundary />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
