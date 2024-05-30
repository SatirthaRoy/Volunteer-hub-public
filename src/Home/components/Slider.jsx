import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';


const Slider = () => {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-screen"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://almosthome.on.ca/wp-content/uploads/2020/07/volunteer.png)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='space-y-20'>
          <div className="subtitle text-lg md:text-4xl font-bold" data-swiper-parallax="-200">
            WANT TO BE VOLUNTEER?
          </div>
          
          <div className="title text-4xl md:text-9xl font-normal" data-swiper-parallax="-300">
            REQUEST
          </div>
          
          <div className="text text-left flex justify-end h-full w-full" data-swiper-parallax="-100">
            <p className='max-w-96 font-normal text-2xl md:text-3xl'>
              Browse through volunteer hiring posts and request to be a volunteer at your desire post.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='space-y-20'>
          <div className="subtitle text-lg md:text-4xl font-bold" data-swiper-parallax="-200">
            NEED A VOLUNTEER?
          </div>

          <div className="title text-4xl md:text-9xl font-normal" data-swiper-parallax="-300">
            HIRE
          </div>

          <div className="text text-left flex justify-end h-full w-full" data-swiper-parallax="-100">
            <p className='max-w-96 font-normal text-2xl md:text-3xl'>
              Create a hiring post where you can hire volunteer as your need.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='space-y-20'>
          <div className="title text-lg md:text-4xl font-bold" data-swiper-parallax="-300">
            MANAGE
          </div>
          <div className="subtitle text-4xl md:text-9xl font-normal" data-swiper-parallax="-200">
            MANAGE YOUR POSTS
          </div>
         
          <div className="text text-left flex justify-end h-full w-full" data-swiper-parallax="-100">
            <p className='max-w-96 font-normal text-2xl md:text-3xl'>
              Manage your request and hiring posts. Cancel anytime you want. Edit and update if you ever need to.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider;