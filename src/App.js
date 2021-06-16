import {Component} from 'react';
import './App.css';
import Header1 from './Components/Header1';
import Logo from './Components/Logo';
import Academic from './Components/Academic';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {
  
  render()
  {
    return(
      <div>
        <Header1 />
        <Logo />
      </div>
    )
  }
 
}

export default App;
