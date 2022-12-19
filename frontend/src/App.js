
import './App.css';
// import { useContext} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThemeState from "./context/themeState"
// import themeContext from './context/themeContext';

function App() {
// const Theme = useContext(themeContext);

  return (

<div className='h-screen'>
<Router>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <ThemeState>
      <Routes className="relative z-10">
        <Route exact path="/" element={<Home />} />
      </Routes>
    {/* </Suspense> */}
    </ThemeState>
  </Router>
</div>
  );
}

export default App;
