import styles from '../styles/Home.module.css'
import Titleimg from "../components/Titleimg.js"
import Content from "../components/Content"
import Forms from "../components/Forms"
import Bikeb from "../components/Bike"

export default function Home() {
  return (
    <div className={styles.container}>
        <Titleimg />
        <Bikeb/>
        <Content/>
        <Forms />
    </div>
  )
}
