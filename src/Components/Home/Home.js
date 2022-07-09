
import axios from 'axios'
import { useEffect,useState } from 'react'
import './Home.css'

const Home = () => {
  const [cases,setCases] = useState({})
    

useEffect(() => {
  try   {
    async function fetchData(){
       const covidApiUrl=` https://corona-api.com/timeline`
       
       const {data} = await axios.get(covidApiUrl)
      console.log(data); 
      const {confirmed,deaths,recovered,new_confirmed,new_deaths} = data.data[0]
      setCases({confirmed,deaths,recovered,new_confirmed,new_deaths})
      
    }
       
    fetchData();
  }
     catch(e){
       console.log(e)
     }
    }, [])

  return (
    <div>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <div>
            <h3>TOTAL CASES</h3>
            <div>{cases.confirmed}</div>
        </div>
        <div id= "details">
        <div>
            <h4>DEATHS</h4>
            <div>{cases.deaths}</div>
        </div>
        <div>
            <h4>RECOVERED</h4>
            <div>{cases.recovered}</div>
        </div>
        <div>
            <h4>NEW CASES</h4>
            <div>{cases.new_confirmed}</div>
        </div>
        <div>
            <h4>NEW DEATHS</h4>
            <div>{cases.new_deaths}</div>
        </div>
        </div>
    </div>
  )
}

export default Home