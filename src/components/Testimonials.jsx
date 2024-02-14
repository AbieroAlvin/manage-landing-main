import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import testimonialsData from "../data/data"

const Testimonials = () => {
  return (
    <div className="my-12 w-full mx-auto flex items-center justify-center"><div>
       <div>
        <h1 className=''> What they’ve said</h1>
       </div>
       {/* slider */}
       <div></div>

       {/* button */}
       <button className="rounded-full text-[15px] px-8 py-2.5 text-white bg-orange-600 shadow-lg">Get Started</button>
      </div>
      </div>
  )
}

export default Testimonials