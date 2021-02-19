import './App.css';
import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    width: '80%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  swiper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

SwiperCore.use([Navigation, Pagination]);

export default function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container justify="center">
        <Grid item sm={10} xs={10}>
          <Swiper
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={{
              // when window width is >= 320px
              380: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onInit={(swiper) => console.log('Swiper initialized!', swiper)}
            onSlideChange={(swiper) => {
              console.log('Slide index changed to: ', swiper.activeIndex);
            }}
            onReachEnd={() => console.log('Swiper end reached')}
          >
            <SwiperSlide key={1} className={classes.swiper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography>Word of the Day</Typography>
                  <Button size="small">Learn More</Button>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide key={2} className={classes.swiper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography>Word of the Day</Typography>
                  <Button size="small">Learn More</Button>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide key={3} className={classes.swiper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography>Word of the Day</Typography>
                  <Button size="small">Learn More</Button>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide key={4} className={classes.swiper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography>Word of the Day</Typography>
                  <Button size="small">Learn More</Button>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide key={5} className={classes.swiper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography>Word of the Day</Typography>
                  <Button size="small">Learn More</Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
