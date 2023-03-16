
import styles from '../styles/Home.module.css'
import Title from '../Components/Title'
import Button from '../Components/Button'
import { useState } from 'react'
import InputWeight from '../Components/InputWeight'
import InputHeight from '../Components/InputHeight'
import Result from '../Components/Result'
import Table from '../Components/Table'


export default function Home() {
  
    const [weight, setWeight]=useState()
    const [height, setHeight]=useState()
    const [result, setResult]=useState()

    
    
    return (
      <>
      <Title/>
      <InputWeight w={weight} sw={setWeight}/>
      <InputHeight h={height} sh={setHeight}/>
      <Button h={height} w={weight} sr={setResult}/>
      <Result r={result}/>
      <Table/>
      </>
    )
}
