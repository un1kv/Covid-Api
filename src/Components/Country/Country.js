import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Country = ({countryValue}) => {
    const [countryData,setCountryData] = useState([])
    useEffect(() => {
        try   {
          async function fetchData(){
            
             const covidApiUrl=`https://corona-api.com/countries/${countryValue}`
           
             const {data} = await axios.get(covidApiUrl)
            
            const{ active } = data.data.timeline[0]
            const{confirmed,deaths,recovered,critical } = data.data.latest_data
            const {name,today} = data.data
            setCountryData({active,confirmed,deaths,recovered,critical,today,name})
              }
          fetchData();
          }
          catch(e){
            console.log(e)
          }
        },[countryValue])
  
  return (
    <div>
        <h1>{countryData.name}</h1>
        <p>active:{countryData.active}</p>
        <p>confirmed:{countryData.confirmed}</p>
        <p>deaths:{countryData.deaths}</p>
        <p>recovered:{countryData.recovered}</p>
        <p>critical:{countryData.critical}</p>
      
        
    </div>
  )
}

export default Country