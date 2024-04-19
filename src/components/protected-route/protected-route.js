import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({element}) {

  const { loggedIn } = useSelector(store => ({loggedIn: store.user.loggedIn}));

  return (
    loggedIn ? element : <Navigate to={'/login'} />
  );
};

export default ProtectedRouteElement;
