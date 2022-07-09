import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import {useEffect,useState} from "react";
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import CountriesPage from './Pages/CountriesPage/CountriesPage';


function App() {
  
    const [countryValue,setCountryValue] = useState("")
    const [param,setParam]=useState([])

      
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar  selectCountries={param.map((el)=> <option value={el.code}> {el.name} </option>)}
      setParam = {setParam}
      countryCode={(e)=>{
        setCountryValue(e.target.value)
      }}
       />
      <Routes>
      <Route path="/" element={<HomePage setParam={setParam} param={param}/>}  /> 
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/CountriesPage" element={<CountriesPage countryValue={countryValue}/>} />
      <Route path="/*" element={<p>404 not found</p>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
