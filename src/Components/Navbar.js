import { useEffect } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Navbar = ({selectCountries,countryCode,setParam}) => {
  const listStyle = {
      display: "flex",
      justifyContent: "space-around",
      border: "black solid 1px",
      listStyle: "none",
    };

    
    useEffect(() => {
      try   {
        async function fetchData(){
           const covidApiUrl=`https://corona-api.com/countries`
           
           const {data} = await axios.get(covidApiUrl)
          

          setParam(data.data.map((el)=>({name:el.name,
              deaths:el.latest_data.deaths,
             todayDeaths:el.today.deaths,
             todayConfirmed:el.today.confirmed,
             confirmed:el.latest_data.confirmed,
              code:el.code
          })))

       }
       
         fetchData();
         
      }
         catch(e){
           console.log(e)
         }
        }, [])

   

return (
  <div>
  <ul style={listStyle}>
    <li>
      <Link to="/" >
        Home
      </Link>
    </li>
    <li>
      <Link to="/CountriesPage" >
      <select onChange={countryCode}>{selectCountries}</select>
          
      </Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
</div>
)}
 
export default Navbar;