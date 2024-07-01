import Home from './Home'
import About from './About'
import Events from './Events'
import Theme from './Theme'
import Action from './Action'
import Footer from "./Footer"
export default function Umang(){
    return(
        <>
        <div className="main-container">
      <Home/>
      <About/>
      <Events/>
      <Theme/>
      <Action/>
      <Footer/>
      </div>
    </>
    )
}