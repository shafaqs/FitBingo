import BaseCard from "@/src/components/baseCard/BaseCard";
import styles from '/styles/UserXP.module.css';
 
export default function UserXP(props) {
  
  //Shows the xp amount needed to progress to the next level.
  const xpProgress = props.xp >= 1000? props.xp % 1000 : props.xp
  const progress = (xpProgress / 1000) * 100;
  const level = Math.floor(props.xp / 1000) + 1;

  return (
    <div>
      <BaseCard >
        Level {level}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }}>
            <div className={styles.progressText}>{1000 - xpProgress} XP until next level</div>
          </div>
        </div>
      </BaseCard>
    </div>
  )
}