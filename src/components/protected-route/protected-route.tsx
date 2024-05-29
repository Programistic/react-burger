import { shallowEqual, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { FC } from 'react';

interface IProtectedRouteProps {
  element: JSX.Element,
  isAuthAccess: boolean,
}

interface IAppStore {
  flag: any,
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ element, isAuthAccess }) => {

  const { loggedIn } = useSelector((store: IAppStore) => ({ loggedIn: store.flag.loggedIn }), shallowEqual);
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
