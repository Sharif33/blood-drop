import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import banner from '../../../../images/blood-banner.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import './Banner.css';

const TopBanner = () => {
    return (
        <div>
          <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="swiper"
      >
        <SwiperSlide>
            <div className="banner text-center">
               <div className='bnr-top p-4 py-md-5'>
                <div className="m-auto align-items-center">
                  <h3>
                    DONATE BLOOD,SAVE LIFE !
                    </h3>
                    <h2>Your Donation Can bring <br />
                     smile at other face</h2>

                     <button className='btn btn-lg mt-4 btn-danger rounded-0'>JOIN WITH US</button>
                </div>
                    
                </div>
            </div>
        <div>
          <img className='img-fluid w-100' src={banner} alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="banner text-center">
               <div className='bnr-top p-4 py-md-5'>
                    <h3>
                    DONATE BLOOD,SAVE LIFE !
                    </h3>
                    <h2>Donate your blood and <br />
                     inspires to other</h2>

                     <button className='btn btn-lg mt-4 btn-danger rounded-0'>DONATE</button>
                </div>
            </div>
        <div>
          <img className='img-fluid w-100' src={banner} alt="" />
        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default TopBanner;