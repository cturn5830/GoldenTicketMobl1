import styles from '../styles/Home.module.css'
import Titleimg from "../components/Titleimg.js"
import Heroimg from "../components/Bike"
import Content from "../components/Content"
import Forms from "../components/Forms"
import Thankscontent from '../components/Thankscontent'
import Thankshero from '../components/Thankshero'
import Titlethanks from '../components/TitleThanks'
export default function Home() {
  return (
    <div className={styles.container}>
        <Titleimg/>
        <Thankshero />
        <Thankscontent/>
    </div>
  )
}
