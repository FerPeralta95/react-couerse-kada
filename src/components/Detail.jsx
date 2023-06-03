//Dependiceis
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams();
  return <h2>{`Hi ${id}!`}</h2>;
};
