import React from 'react'
import Home from '../../Components/Home/Home'
import Sort from '../../Components/Sort/Sort'

const HomePage = ({setParam,param}) => {
  return (
    <div>
        <Home setParam={setParam} param={param}/>
        <Sort param={param}/>
        </div>
  )
}

export default HomePage