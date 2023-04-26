import React from 'react'



const EmptyList = () => {
  return (
    <div className='emptyList-wrap'
    style={{
     display:"flex",
     justifyContent:"center"



    }} 
    
    
    >
        <img src="/image/searching.gif" alt="gif"  
        style={
          {
            maxWidth:"250px",
            width:"100%"
          }
        } />  {/* empaty.gif*/ }
    </div>
  )
}

export default EmptyList