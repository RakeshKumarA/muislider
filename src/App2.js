import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

SwiperCore.use([Navigation, Pagination]);

const App2 = () => {
  return (
    <Fragment>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination
        slidesPerView={1}
        spaceBetween={40}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        <SwiperSlide key={1}>
          <Card variant="outlined">
            <CardContent>
              <Typography>Word of the Day</Typography>
              <Button size="small">Learn More</Button>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography>Word of the Day</Typography>
              <Button size="small">Learn More</Button>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography>Word of the Day</Typography>
              <Button size="small">Learn More</Button>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography>Word of the Day</Typography>
              <Button size="small">Learn More</Button>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default App2;
