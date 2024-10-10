import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
      >
        Page does not exist
      </p>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
        }}
        to='/'
      >
        Back to Main Page
      </Link>
    </div>
  );
};

export default Page404;
