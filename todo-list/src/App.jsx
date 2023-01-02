import { createGlobalStyle } from 'styled-components'
import Home from './components/Home'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }

  body{
    
    background: #EFF5F5;
    min-height: 100%;
    width: 100%;
    
  }
`

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Home/>
    </div>
  )
}

export default App
