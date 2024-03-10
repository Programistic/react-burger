import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';
import { useEffect, useState } from 'react';
import { dataURL } from '../../utils/constants';

function App() {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    dataArray: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    try {
      setState({ ...state, hasError: false, isLoading: true });
      const res = await fetch(dataURL);
      const data = await res.json();  
      setState({ ...state, dataArray: data, isLoading: false });
    } catch (error) {
      setState({ ...state, hasError: true, isLoading: false });
    }
  };

  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { state.dataArray.success && 
      <AppMain data={state.dataArray.data} /> }
    </div>
  );
}

export default App;
