import styles from '../styles/Home.module.css'
import Titleimg from "../components/Titleimg.js"
import Thankscontent from '../components/Thankscontent'
import Thankshero from '../components/Thankshero'

export default function Home() {
  return (
    <div className="contains">
        <Titleimg/>
        <Thankshero />
        <Thankscontent/>
    </div>
  )
}
