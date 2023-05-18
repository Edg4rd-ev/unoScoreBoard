import Count from '../components/count'
import styles from './uno.module.css'

export default function Uno() {
  return (
    <>
      <div className={styles.content}>
        <Count name="Edgar" color="Green" />
        <Count name="Janaina" color="yellow" />
        <Count name="Vitória" color="red" />
        <Count name="Lucas" color="blue" />
      </div>
    </>
  )
}
