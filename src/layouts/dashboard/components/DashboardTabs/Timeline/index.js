import React from 'react'
import Clusters from './Clusters'
const index = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:"#f8f9fd"}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}> 
            <div>
                <Clusters/>
            </div>
        </div>
    </div>
  )
}

export default index