import { EffectFade, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { BiFolder, BiSolidHome } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';

export const HeroArtery = ({ slides }:any) => {
  return (
    <div className='relative'>
      <div className='absolute z-[2] w-4/5 text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='block lg:text-7xl text-5xl cursor-pointer font-raleway text-white'>
        ARTERY
        </span>
        <div className="flex justify-center lg:text-lg text-sm text-white breadcrumbs">
          <ul>
            <li><a href='/'>
              <BiSolidHome className='mr-2'/>
              Home
              </a>
            </li> 
            <li><a href='/artery'>
              <BiFolder className='mr-2'/>
              Artery
              </a>
            </li> 
            <li>
              <HiOutlineDocumentText className='mr-2'/>
              Start Learning
            </li>
          </ul>
        </div>
      </div>
      <Swiper className='rounded-lg container max-w-full sm:h-[56vh] h-[36vh]'
      modules={[EffectFade, Autoplay, Scrollbar, A11y]}
      spaceBetween={0}
      effect={'fade'}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {slides.map((slide : any) => (
        <SwiperSlide key={slide.image}>
          <img className='object-cover h-full w-full' src={slide.image} alt={slide.title}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
);
};