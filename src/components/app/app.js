import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';
import Preloader from '../preloader/preloader';
import { useEffect, useState } from 'react';
import { dataURL } from '../../utils/constants';

function App() {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    success: false,
    data: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    try {
      setState({ ...state, hasError: false, isLoading: true });
      const res = await fetch(dataURL);
      const resJson = await res.json();  
      setState({ ...state, success: resJson.success, data: resJson.data, isLoading: false });
    } catch (error) {
      setState({ ...state, hasError: true, isLoading: false });
      console.log(error);
    }
  };

  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { state.success ? <AppMain data={state.data} /> : <Preloader /> }
    </div>
  );
}

export default App;
