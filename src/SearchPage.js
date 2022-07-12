import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
       <div className='searchPage__info'>
         <p> 62 stays . 26 august to 30 
          august . 2 guest</p>
          <h1>Stays nearby</h1>
          <Button
          variant='outlined'>Cancellation
           Flexibility</Button>

           <Button
          variant='outlined'>Type of
           place</Button>

           <Button
          variant='outlined'>Price</Button>

           <Button
          variant='outlined'>Rooms and beds</Button>

           <Button
          variant='outlined'>More filters</Button>
       </div>
       <SearchResult 
       img="https://images.pexels.com/photos/26139/pexels-photo-26139.jpg?auto=compress&cs=tinysrgb&w=300"
       location="Private room in
       center of london"
       title="Stay at this spacious
       Edwardian House"
       description="1 guest . 1
       bedroom . 1 bed . 1.5 shared
       bathrooms . wifi . kitchen .
       Free parking . Washing Washing Machine"
       star={4.73}
       price="$36 / night"
       total="$124 total"
       
       />

     <SearchResult 
       img="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=300"
       location="Private room in
       center of london"
       title="Stay at this spacious
       Edwardian House"
       description="1 guest . 1
       bedroom . 1 bed . 1.5 shared
       bathrooms . wifi . kitchen .
       Free parking . Washing Washing Machine"
       star={4.73}
       price="$36 / night"
       total="$124 total"
       
       />

     <SearchResult 
       img="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=300"
       location="Private room in
       center of london"
       title="Stay at this spacious
       Edwardian House"
       description="1 guest . 1
       bedroom . 1 bed . 1.5 shared
       bathrooms . wifi . kitchen .
       Free parking . Washing Washing Machine"
       star={4.73}
       price="$36 / night"
       total="$124 total"
       
       />

    <SearchResult 
       img="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=300"
       location="Private room in
       center of london"
       title="Stay at this spacious
       Edwardian House"
       description="1 guest . 1
       bedroom . 1 bed . 1.5 shared
       bathrooms . wifi . kitchen .
       Free parking . Washing Washing Machine"
       star={4.73}
       price="$36 / night"
       total="$124 total"
       
       />

     <SearchResult 
       img="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=300"
       location="Private room in
       center of london"
       title="Stay at this spacious
       Edwardian House"
       description="1 guest . 1
       bedroom . 1 bed . 1.5 shared
       bathrooms . wifi . kitchen .
       Free parking . Washing Washing Machine"
       star={4.73}
       price="$36 / night"
       total="$124 total"
       
       />

     <SearchResult 
       img="https://images.pexels.com/photos/137090/pexels-photo-137090.jpeg?auto=compress&cs=tinysrgb&w=300"
       location="Private room in
       center of london"
       title="Stay at this spacious
       Edwardian House"
       description="1 guest . 1
       bedroom . 1 bed . 1.5 shared
       bathrooms . wifi . kitchen .
       Free parking . Washing Washing Machine"
       star={4.73}
       price="$36 / night"
       total="$124 total"
       
       />
    </div>
  )
}

export default SearchPage 