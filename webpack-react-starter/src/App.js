import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  var max = 5;
  var slidesOnScreen;
  var count = 1;
  for (let i = 0; i < max; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/${window.innerWidth}/${window.innerHeight}`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }

  function handleChange() {
    count=slidesOnScreen;
  }
  
  return (
    <React.Fragment>
      <div>Slider Application</div>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        loop
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={count}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex + 1);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
      <div>
      <label>Slides on screen   </label>
      <input type="text" pattern="[0-9]*" className="form-control" placeholder="enter number" name="Slides on screen" value={slidesOnScreen}/> &nbsp;
      <button className="btn btn-primary btn-lg btn-lg" type={"submit"} onClick={handleChange()}>Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;

      <label>Go to slide   </label>
      <input type="text" pattern="[0-9]*" className="form-control" placeholder="enter number" name="Go to slide" value={slidesOnScreen}/> &nbsp;
      <button className="btn btn-primary btn-lg btn-lg" type={"submit"} onClick={handleChange()}>Submit</button>
      </div>
    </React.Fragment>
  );
}

export default App;