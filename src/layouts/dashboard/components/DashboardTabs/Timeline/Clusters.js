import { Typography } from '@mui/material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';


const Clusters = () => {

  const Cluster = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', height: 100, width: 100 }}>
      <CircularProgressbar value={66} text={`${66}%`} />
      <Typography style={{ fontSize: 14, fontWeight: 'bold', alignItems: 'center', textAlign: 'center' }}>Energy and Environment</Typography>
    </div>
  )
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', backgroundColor: '#fff', padding: 20, borderRadius: "12px" }}>
      <Typography style={{fontWeight:'bold'}}>Learning Clusters</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
        <Swiper
          slidesPerView={6}
          style={{width:600,height:170}}
          pagination={true}
          modules={[Pagination]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            Array.from(Array(12)).map((index) => <SwiperSlide key={index} style={{width:100,height:100,}}><Cluster /></SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Clusters