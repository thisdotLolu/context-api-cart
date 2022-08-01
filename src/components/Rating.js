import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {FaStar} from 'react-icons/fa'


const Rating = ({value,text,color}) => {
  return (
    <div className='rating'>
        {[1,2,3,4,5].forEach((rate)=>{
            <span key={uuidv4()}>
                <FaStar/>
            </span>
        })}
    </div>
  )
}

Rating.defaultProps={
    color: 'black',

}
    

export default Rating