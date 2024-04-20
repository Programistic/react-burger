import { shallowEqual, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedAuthUserRouteElement({element}) {

 const { loggedIn } = useSelector(store => ({ loggedIn: store.flag.loggedIn }), shallowEqual);

  return (
    !loggedIn ? element : <Navigate to={'/'} replace={true} />
  );

};

export default ProtectedAuthUserRouteElement;
