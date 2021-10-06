import styles from './App.module.css'
import './App.css'
import { Header } from './components/Header.js'
import { Slideshow } from './components/home/Slideshow.js'
import { TopGenres } from './components/home/TopGenres'
import { ImageCarousel } from './components/home/ImageCarousel'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Slideshow width="100%" timeout="3000" />
      <div style={{ margin: 'auto 5%' }}>
        <h2 className={styles.subtitle}>Explore by genre</h2>
        <TopGenres />
        <h2 className={styles.subtitle}> Bestsellers </h2>
        <ImageCarousel />
        <h2 className={styles.subtitle}> Read it before you watch it</h2>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Slideshow width="50%" timeout="3000" />
        </div>
      </div>
    </div>
  );
}

export default App;
