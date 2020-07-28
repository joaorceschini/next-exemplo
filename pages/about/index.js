import Header from './../../components/header'
import styles from './styles.scss'

export default function About() {
  return (
    <div className={styles.container}>
      <Header title="sobre nos" />
      
      { Date.now() }

      <button onClick={() => alert('Ola como vai?')}>Abacate</button>

      <h1>about</h1>
    </div>
  )
}