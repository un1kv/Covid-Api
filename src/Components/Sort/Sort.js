import React, { useEffect ,useState} from 'react'
import './sort.css'

const Sort = ({param}) => {
 
  const[sortDeaths,setSortDeaths] = useState([])
  const[sortConfirmed,setSortConfirmed] = useState([])
  const[sorTodayDeaths,setSortTodayDeaths] = useState([])
  const[sortTodayConfirmed,setSortTodayConfirmed] = useState([])

      useEffect(()=>{
        setSortDeaths([...param].sort((a,b)=>b.deaths-a.deaths).splice(0,5))

        setSortConfirmed([...param].sort((a,b)=>b.confirmed-a.confirmed).splice(0,5))

        setSortTodayDeaths([...param].sort((a,b)=>b.todayDeaths-a.todayDeaths).splice(0,5))

        setSortTodayConfirmed([...param].sort((a,b)=>b.todayConfirmed-a.todayConfirmed).splice(0,5))

      },[param])
  return (
    <div>
      <div>
      <h3>Most Deaths - All Time</h3>
      <ul>
       { sortDeaths.map((el)=>
        <p>{el.name}:{el.deaths} </p>
      
        )}
      </ul>
      </div>

      <div>
      <h3>Most Confirmed - All Time</h3>
      <ul>
       { sortConfirmed.map((el)=>
        <p>{el.name}:{el.confirmed} </p>
      
        )}
      </ul>
    </div>

    <div>
      <h3>Most Deaths - Today</h3>
      <ul>
       { sorTodayDeaths.map((el)=>
        <p>{el.name}:{el.todayDeaths} </p>
      
        )}
      </ul>
    </div>

    <div>
      <h3>Most Confirmed - Today</h3>
      <ul>
       { sortTodayConfirmed.map((el)=>
        <p>{el.name}:{el.todayConfirmed} </p>
      
        )}
      </ul>
    </div>
    </div>
  )
}

export default Sort