import React from 'react'
import './Categories.sass'


export const categories = ['CITIES',  'HISTORY', 'CULTURE', 'SPORT' ,'NEWS']

function Categories() {

  return (
    <div className='categories'>
        <h2>ABOUT UKRAINE</h2>
        <ul>
                  {categories.map((category, index)=>(
                      <li key={index}>{category}</li>
                  ))}
        </ul>
    </div>
  )
}

export default Categories