import styles from './MyButton.module.css'
const MyButton = (props) => {
  return (
    <button type="button" className={styles.mybtn} onClick={props.btnClick}>
      {props.value}
    </button>
  )
}
export default MyButton
