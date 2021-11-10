import React, { useEffect } from "react";
import Router from 'next/router'


import styles from '../styles/Home.module.css'
import Titleimg from "../components/Titleimg.js"
import Content from "../components/Content"
import Forms from "../components/Forms"
import Herobike from '../components/Bike'

export default function Home() {
  return (
    <div className="contains">
        <Titleimg />
        <Herobike/>
        <Content/>
        <Forms />
    </div>
  )
}
