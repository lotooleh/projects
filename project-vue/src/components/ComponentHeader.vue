 <template>
    <header v-bind:class="['header', isActive ? activeClass : 'header_active']">
      <div class="header-wrapper container">
        <div class="header__logo">
          <a v-bind:href="baseUrl">
            <img v-bind:src="logo.url" v-bind:alt="logo.alt">
          </a>
        </div>
        <div class="header__nav">
          <ComponentMainMenu v-bind:menuItems="menuItems"/>
        </div>
        <div class="header__social" >
          <div class="header__link">
            <a v-bind:href="instaLink"><fa :icon="['fab', 'instagram']" /></a>
          </div>
          <div class="header__link">
            <a v-bind:href="faceLink"><fa :icon="['fab', 'facebook']" /></a>
          </div>
          <div class="header__link">
            <a v-bind:href="youtubeLink"><fa :icon="['fab', 'youtube']" /></a>
          </div>
        </div>
        <div v-on:click="menuActive" v-bind:class="['header__burger-menu', isActive ? activeClass : 'header__burger-menu_active']">
        </div>
      </div>
    </header>
 </template>
  
  <script>
  import ComponentMainMenu from '../components/menu/ComponentMainMenu.vue'
  export default {
    name: 'ComponentHeader',
    components: {
    ComponentMainMenu
  },
    data() {
      return {
        logo: {
          alt: 'logo',
          url: 'src/img/logo-header.svg'
        },
        baseUrl: 'http://localhost:8080',
      isActive: true,
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
    },
    methods: {
      menuActive() {
        this.isActive = !this.isActive;
      }
    }
  }
  </script>
  
  <style>                            
  @import "../../public/src/css/header.min.css";
  </style>
  