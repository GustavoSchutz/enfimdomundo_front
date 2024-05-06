import { useRef } from 'react'
import './CSS/reset.css'
import './CSS/Style.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Home from './home'
import Header from './header'
import Guiloere from './Guiloere'

function App() {
  const ref = useRef();

  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer sticky={{ start: 0, end:3 }}>
          <Header ref={ref}/>
        </ParallaxLayer>
        <ParallaxLayer offset={.1} speed={.5} id='parallax_home'>
          <Home/>
        </ParallaxLayer>
        <ParallaxLayer offset={ .81 }
         factor={1.81}
         sticky={{ start: .81,  end: 1.5 }} 
         speed={ .5 }>
          <Guiloere/>
        </ParallaxLayer>
      </Parallax>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
