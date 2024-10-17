import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Swiper.css";


export default () => {
  return (
    <Swiper className='swipper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      Navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='swiper_wrap'>
        <div className="container">
          <h1>HomeKit bilan uyingizni boshqaring</h1>
          <p>Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.</p>
          <a href="#">Buyutme berish</a>
        </div>
      </SwiperSlide>

      <SwiperSlide className='swiper_wrap '>
        <div className="container">
          <h1>HomeKit bilan uyingizni boshqaring</h1>
          <p>Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.</p>
          <a href="#">Buyutme berish</a>
        </div>
      </SwiperSlide>

      <SwiperSlide className='swiper_wrap'>
        <div className="container">
          <h1>HomeKit bilan uyingizni boshqaring</h1>
          <p>Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.</p>
          <a href="#">Buyutme berish</a>
        </div>
      </SwiperSlide>

      <SwiperSlide className='swiper_wrap'>
        <div className="container">
          <h1>HomeKit bilan uyingizni boshqaring</h1>
          <p>Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.</p>
          <a href="#">Buyutme berish</a>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};