import styles from "/styles/Square.module.css";

//Component for each square on a bingo board

const Square = ({ value }) => {
  return (
    <div className={styles.square}>
      {value}
    </div>
  );
};

export default Square;
