import classes from './index.module.scss';

function Loader(props) {
  return (
    <div className={classes.loader_bg}>
      <div className={classes.loader_parent}>
        <div className={classes.loader}>Loading...</div>
      </div>
    </div>
  );
}

export default Loader;
