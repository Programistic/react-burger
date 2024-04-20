import { shallowEqual, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedResetPasswordRouteElement({element}) {

  const { loggedIn } = useSelector(store => ({ loggedIn: store.flag.loggedIn }), shallowEqual);
  const isPasswordRecoverRequest = localStorage.getItem('isPasswordRecoverRequest');

  if (loggedIn) {
    return <Navigate to='/' replace={true} />
  } else if (isPasswordRecoverRequest) {
    return element;
  } else {
    return <Navigate to='/login' replace={true} />;
  };
};

export default ProtectedResetPasswordRouteElement;
