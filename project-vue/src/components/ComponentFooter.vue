 <template>
    <footer class="footer">
      <div class="footer-wrapper container">
        <div class="footer__logo">
          <a v-bind:href="baseUrl">
            <img v-bind:src="logo.url" v-bind:alt="logo.alt">
          </a>
        </div>
        <div class="footer__nav">
          <ComponentMainMenu v-bind:menuItems="menuItems"/>
        </div>
        <div class="footer__social">
          <div class="footer__link">
            <a v-bind:href="instaLink"><fa :icon="['fab', 'instagram']" /></a>
          </div>
          <div class="footer__link">
            <a v-bind:href="faceLink"><fa :icon="['fab', 'facebook']" /></a>
          </div>
          <div class="footer__link">
            <a v-bind:href="youtubeLink"><fa :icon="['fab', 'youtube']" /></a>
          </div>
        </div>
      </div>
    </footer>
 </template>
  
  <script>
  import ComponentMainMenu from '../components/menu/ComponentMainMenu.vue'
  export default {
    name: 'ComponentFooter',
    components: {
    ComponentMainMenu
  },
  data() {
      return {
        logo: {
          alt: 'logo',
          url: 'src/img/logo-footer.svg'
        },
        baseUrl: 'http://localhost:8080',
        menuItems: [
        { text: 'home',
          url: '/'
         },
        { text: 'movies',
          url: '/movies'
         },
        { text: 'about us',
          url: '/about'
         },
      ],
      instaLink: 'https://www.instagram.com/movie/',
      faceLink: 'https://www.facebook.com/',
      youtubeLink: 'https://www.youtube.com/',
  }
}
}
  </script>
  
  <style>
    @import "../../public/src/css/footer.min.css";
  </style>
  