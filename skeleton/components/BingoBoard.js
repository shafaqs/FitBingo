import styles from '../styles/Home.module.css';

const BingoBoard = ({ board, onSquareClick }) => {
  return (
    <div className={styles.container}>
      <table className={styles.board}>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((square, columnIndex) => (
                <td
                  key={`${rowIndex}-${columnIndex}`}
                  className={`${styles.square} ${square.checked ? styles.checked : ''}`}
                  onClick={() => onSquareClick(rowIndex, columnIndex)}
                >
                  {square.name}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoBoard;
