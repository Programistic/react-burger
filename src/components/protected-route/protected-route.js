import { shallowEqual, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({element}) {

  const { loggedIn } = useSelector(store => ({ loggedIn: store.flag.loggedIn }), shallowEqual);

  return (
    loggedIn ? element : <Navigate to='/login' replace={true} />
  );
};

export default ProtectedRouteElement;
