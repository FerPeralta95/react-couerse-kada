//Dependencies
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

//API
import { fetchPet } from '../api/fetchPet';

//Components
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

export const Detail = () => {
  const { id } = useParams();
  const results = useQuery(['detail', id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🙄</h2>
      </div>
    );
  }

  const [pet] = results.data.pets;

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Detail {...props} />
    </ErrorBoundary>
  );
}
