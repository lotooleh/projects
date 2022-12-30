<template>
  <div class="movie_wrap">
    <div class="search-movie_wrap">
      <h1 class="search-title">{{ titleSearch }}</h1>
      <div class="search-movie">
        <div class="search-movies">
          <input class="input" type="text" placeholder="movie" v-model="query">
          <input class="button" type="button" value="Search" v-on:click="movieSearch">
        </div>
        <div class="filters">
          <input class="filters__button" type="button" value="filter" v-on:click="applyFilters">
          <div class="filters__genres-year">
            <select class="filters__select" v-model="selectedGenre" v-on:click="getGenres">
              <option disabled value="">select a genre</option>
              <option class="filters__genres"  v-for="genre in genres" :value="genre.id" :key="genre.genres">
                {{ genre.name }}
              </option>
            </select>
            <input class="filters__date" type="text" placeholder="enter the Year" v-model="primary_release_year">
          </div>
        </div>
      </div>
    </div>
    <div class="movies-items movies">
    <div class="movies-item" v-for="movie in movies" :key="movie.movies">
        <router-link class="movie-item__link" v-bind:to="'/movie/' + movie.id">
          <img class="movies__img" v-bind:src="'https://image.tmdb.org/t/p/original/' + movie.poster_path">
          <h1 class="movies__title">{{ movie.title }}</h1>
          <h3 class="movies__popular">Popularity: {{ movie.popularity }}</h3>
          <h3 class="movies__release_date">{{ movie.release_date }}</h3>
        </router-link>
    </div>
    </div>
    <div class="paginate">
    <vue-awesome-paginate
    :total-items="totalResults"
    :items-per-page="10"
    :max-pages-shown="5"
    :current-page="page"
    :on-click="onClickHandler"
    />
    </div>
</div>
</template>
  
<script>
import axios from 'axios'
export default {
    components: {
  },     
    name: 'MoviesPage',
    data() {
      return {
        titleSearch: 'Welcome.Millions of movies, TV shows and people to discover. Explore now.',
        movies: null,
        error: [],
        page: 1,
        query: '',
        primary_release_year: '',
        with_genres: '',
        totalResults: 0,
        genres: [],
        genre:null,
        selectedGenre: '',
        apiURL: 'http://api.themoviedb.org/3/discover/movie',
        searchApiURL: 'https://api.themoviedb.org/3/search/movie',
        genresApiURL: 'https://api.themoviedb.org/3/genre/movie/list?',
        apiKEY: 'api_key=9b11d5aa44816c07f40205dd8c400d9b',
        params: { api_key: '9b11d5aa44816c07f40205dd8c400d9b'}
      }
    },
    methods: {
      movieList() {
        axios.get(this.apiURL, {params: this.params})
        .then(response => {
          this.movies = response.data.results
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
        .catch(e => {
          this.error.push(e)
        })
    },
    movieSearch() {
    this.params.query = this.query
    this.params.movieDate = this.movieDate
         axios.get(this.searchApiURL, {params: this.params})
        .then(response => {
          this.movies = response.data.results
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
        .catch(e => {
          this.error = e;
        })
    },
    applyFilters() {   
    this.params.primary_release_year = this.primary_release_year
    this.params.with_genres = this.selectedGenre
        axios.get(this.apiURL, {params: this.params})
        .then(response => {
          this.movies = response.data.results
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
        .catch(e => {
          this.error = e;
        })
    },
    getGenres() {
      axios.get(this.genresApiURL, {params: this.params})
        .then(response => {
          this.genres = response.data.genres
        })
        .catch(e => {
          this.error = e;
        })
    },
    onClickHandler (page) {
      this.page = page;
      this.params.page = page;
      this.movieList();
   },
  },
  mounted() {
  this.movieList();
}
}
</script>
  
<style>
  @import "../../../public/src/css/movies-page.min.css";
  @import "../../../public/src/css/searchmovie.min.css";
</style>