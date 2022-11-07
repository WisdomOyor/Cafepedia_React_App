import React from 'react';
import './App.css';
import Slider from './pages/components/Header/Slider';
import Body from './pages/components/Body/Body';
import Footer from "./pages/components/Footer"

function App() {
  return (
    <div className="App">
      <header className='dark-img-bg-div'>
      <Slider></Slider>
      </header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;

// const [data, setData] = React.useState(null);

// React.useEffect(() => {
//   fetch('/api')
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);
