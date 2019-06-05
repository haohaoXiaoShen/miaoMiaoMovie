import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from "./movie/"
import cinemaRouter from "./cinema"
import mineRouter from "./mine"
import movieInfo from './movieInfo/movieInfo';
import cinemaInfo from "./cinemaInfo"
import chooseSite from './chooseSite';
import regist from "./regist" 
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter, cinemaRouter, mineRouter, movieInfo, cinemaInfo, chooseSite,regist,
    {
      path: "/",
      redirect: "/Movie"
    }
  ]
})