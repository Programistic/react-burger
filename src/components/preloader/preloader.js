import PreloaderStyles from './preloader.module.css';

function Preloader() {
  return (
    <div className={PreloaderStyles.preloader}>
      <div className={PreloaderStyles.preloader__container}>
        <span className={PreloaderStyles.preloader__round}></span>
      </div>
    </div>
  );
}

export default Preloader;
