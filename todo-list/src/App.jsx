import Form from './components/Form'
import { createGlobalStyle } from 'styled-components'


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
      <Form/>
    </div>
  )
}

export default App
