//Dependencies
import { createRoot } from 'react-dom/client';

//Components
import { Pet } from './Pet';

const animales = [
  {
    name: 'Max',
    type: 'Perro Boxer',
    breed: 'Croquetas',
  },
  {
    name: 'Tommy',
    type: 'Perrito Zchanauzer',
    breed: 'Pollito',
  },
  {
    name: 'Odin',
    type: 'Loro',
    breed: 'Semillas',
  },
  {
    name: 'Nemo',
    type: 'Pez Payaso',
    breed: 'Comida de pez',
  },
  {
    name: 'Simba',
    type: 'León',
    breed: 'Carne',
  },
];

const App = () => (
  <div>
    <Pet animal={animales[0]} />
    <Pet animal={animales[1]} />
    <Pet animal={animales[2]} />
    <Pet animal={animales[3]} />
    <Pet animal={animales[4]} />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
