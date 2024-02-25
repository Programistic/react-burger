import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';

function App() {
  return(
    <div className={AppStyles.page}>
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default App;
