import React ,{Component} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component
{
  render()
  {
    return(
      <div className='container'>
        <center>
        <Home/>
        <About/>
        <Contact/>
        </center>
      </div>
    )
  }
}
export default App