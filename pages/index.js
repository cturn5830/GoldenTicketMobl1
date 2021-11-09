import styles from '../styles/Home.module.css'
import Titleimg from "../components/Titleimg.js"
import Bike from "../components/Bike"
import Content from "../components/Content"
import Forms from "../components/Forms"

export default function Home() {
  return (
    <div className={styles.container}>
        <Titleimg />
        <Bike />
        <Content/>
        <Forms />
    </div>
  )
}
