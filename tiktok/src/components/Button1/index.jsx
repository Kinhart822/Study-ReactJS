import clsx from 'clsx';
import styles from './Button1.module.css';

function Button1({ primary }) {
  const classes = clsx(styles.btn, { [styles.primary]: primary });
  return (
    <div style={{ padding: "32px" }}>
      <button className={classes}>Hello from Button1 Component!</button>
    </div>
  );
}

export default Button1;
