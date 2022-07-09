import React from 'react'
import Country from '../../Components/Country/Country'

const CountriesPage = ({countryValue}) => {
  return (
    <div>
      <Country countryValue={countryValue}/>
    </div>
  )
}

export default CountriesPage