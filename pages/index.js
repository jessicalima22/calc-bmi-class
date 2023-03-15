import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Title from '../Components/Title'
import Button from '../Components/Button'


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
