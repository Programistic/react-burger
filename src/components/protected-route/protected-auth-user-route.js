import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedAuthUserRouteElement({element}) {

  const { loggedIn } = useSelector(store => ({loggedIn: store.user.loggedIn}));

  return (
    !loggedIn ? element : <Navigate to={'/'} />
  );

};

export default ProtectedAuthUserRouteElement;
