<template>
   
<div class="home-background">
  <div class="container">
    <div class="popular-wrapper">
      <h2 class="popular__main-title">{{ mainTitle }}</h2>
      <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    v-if="movies"
  >
    <swiper-slide v-for="movie in movies" :key="movie.movies">
      <div class="popular__movies">
        <router-link class="popular__link" v-bind:to="'/movie/' + movie.id">         
          <img class="popular__img" v-bind:src="'https://image.tmdb.org/t/p/original/' + movie.poster_path">
          <h1 class="popular__title">{{ movie.title }}</h1>
          <h3 class="popular__popular">Popularity: {{ movie.popularity }}</h3>
          <h3 class="popular__release_date">{{ movie.release_date }}</h3>        
        </router-link>
      </div>    
    </swiper-slide> 
    </swiper>
    </div>
  </div>
</div>
</template>
  
<script>
import axios from 'axios'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default {
  name: 'NewMoviesPage',
  components: {
    Swiper,
    SwiperSlide,
  }, 
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
    data() {
      return {
        mainTitle:'The most popular movies on our site',
        movies: null,
        error: [],
        page: 1,
        totalResults: 0,
        ratingURL: 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=9b11d5aa44816c07f40205dd8c400d9b',
        apiDateURL: 'http://api.themoviedb.org/3/discover/movie?primary_release_year=2022&sort_by=vote_average.desc',
        params: { api_key: '9b11d5aa44816c07f40205dd8c400d9b'}
      }
    },
    methods: {
      movieNew() {
        axios.get('https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=9b11d5aa44816c07f40205dd8c400d9b')
        .then(response => {
          this.movies = response.data.results
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
        .catch(e => {
          this.error.push(e)
        })
    },
  },
  mounted() {
  this.movieNew();
}
}

</script>
  
<style>
  @import "../../../public/src/css/home-page.min.css";
  

/* @import "../../../public/src/css/movie-page.min.css"; */
</style>