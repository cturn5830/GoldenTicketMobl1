import styles from '../styles/Home.module.css'
import Titleimg from "../components/Titleimg.js"
import Heroimg from "../components/Bike"
import Content from "../components/Content"
import Forms from "../components/Forms"

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Titleimg />
        <Heroimg />
        <Content/>
        <Forms />

      </div>

    </div>
  )
}
