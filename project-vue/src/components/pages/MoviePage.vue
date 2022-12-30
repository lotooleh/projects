<template>
  <div class="container">
    <div class="movie-item movie">
    <div class="movie__img">
      <img v-bind:src="img">
    </div>
    <div class="movie__content">
     <h1 class="movie__title">{{ title }}</h1>
     <ul class="movie__genre">
      <li v-for='genre in genres' :key='genre.genres'>
        {{ genre.name }}
      </li>
     </ul>
     <h3 class="movie__popular">Popularity: {{ popularity }}</h3>
     <h3 class="movie__date">{{ release_date }}</h3>
     <p class="movie__overviev">{{ overview }}</p>
     <a v-bind:href="backUrl" class="movie__go-back">{{ backButton }}</a>
    </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios'
export default {
  name: 'MovieItem',
  data() {
    return {
      img: null,
      popularity: null,
      title: null,
      overview: null,
      release_date: null,
      genres: null,
      error: [],
      imgUrl: null,
      movieID: useRoute().params.id,
      backUrl: 'http://localhost:8080/movies',
      backButton: 'Go back',
      apiURL: 'https://api.themoviedb.org/3/movie/'+ useRoute().params.id,
      params: {
        api_key: 'b03d508a9e788070ca877f98f3f8bbba'
      },
    }
  },
  methods: {
    movieItem() {
      axios.get(this.apiURL, {params: this.params})
          .then(response => {
            this.img = 'https://image.tmdb.org/t/p/original/' + response.data.poster_path
            this.popularity = response.data.popularity
            this.title = response.data.title
            this.genres = response.data.genres
            this.overview = response.data.overview
            this.release_date = response.data.release_date
          })
          .catch(e => {
            this.error.push(e)
          })
    }
  },
  mounted() {
    this.movieItem();
  }
}
</script>

<style>
  @import "../../../public/src/css/movie-page.min.css";
</style>