import { shallowEqual, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({element, isAuthAccess}) {

  const { loggedIn } = useSelector(store => ({ loggedIn: store.flag.loggedIn }), shallowEqual);
  const location = useLocation();
  const from = location.state?.from || '/';

  if (isAuthAccess && loggedIn) {
    return <Navigate to={ from } />;
  }

  if (!isAuthAccess && !loggedIn) {
    return <Navigate to="/login" state={{ from: location}} />;
  }

  return element;
};

export default ProtectedRoute;
