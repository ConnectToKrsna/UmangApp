// import './App.css'
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Umang from "./Umang"
function App() {

  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Umang />} />
          <Route path="/Register" element={<RegistrationForm />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
