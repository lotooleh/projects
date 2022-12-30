
<!-- <template>
<swiper
:slides-per-view="1"
    :modules="modules"
    :space-between="20"
    :loop="true"
    :pagination="{clickable:true}"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
  >
  
      <swiper-slide v-for="text in swiperTextBase" :key="text.description">
          
      </swiper-slide>    
</swiper>
</template>

<script>
  import {Swiper, SwiperSlide} from 'swiper/vue'
  import {Autoplay, Pagination} from 'swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import {ref} from "vue"
  // import ComponentMoviesNew from '../ComponentMoviesNew.vue'

export default {
  name: 'SwiperComponent',
    components: { Swiper, SwiperSlide}, 
    
  setup() {
      const swiperTextBase = ref([
        {}
      ])
      return {modules:[Pagination, Autoplay], swiperTextBase}
    },
}
</script>
  
<style>
  @import "../../../public/src/css/home-page.min.css";
</style> -->

  <template>
      <div class="about-wrap">
        <div class="about container">
          <h1 class="about__title">{{ title }}</h1>
          <div class="about__bg-img"></div>
          <h2 class="about__subtitle">{{ subtitle }}</h2>
          <p class="about__text">{{ text }}</p>
          <h3 class="about__advantage">{{ advantage }}</h3>
          <ul class="about__advantage-menu">
            <li v-for="item in items" :key="item.items">
              {{ item.punkt }}
            </li>
          </ul>
        </div>
      </div>
  </template>
    
    <script>
    export default {
      name: 'AboutPage',
      data() {
        return {
          title : 'Hi there,',
          subtitle : 'Lets talk about TMDB',
          text : 'The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDbs strong international focus and breadth of data is largely unmatched and something were incredibly proud of. Put simply, we live and breathe community and thats precisely what makes us different',
          advantage : 'The TMDB Advantage',
          items: [
            {punkt:'Every year since 2008, the number of contributions to our database has increased. With over 400,000 developers and companies using our platform, TMDB has become a premiere source for metadata.'},
            {punkt:'Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.'},
            {punkt:'Were international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.'},
            {punkt:'Our community is second to none. Between our staff and community moderators, were always here to help. Were passionate about making sure your experience on TMDB is nothing short of amazing.'},
            {punkt:'Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. Weve proven for years that this is a service that can be trusted and relied on.'}
          
          ]
        }
      }
    }
    </script>
    
    <style>
      @import "../../../public/src/css/about-page.min.css";
    </style>