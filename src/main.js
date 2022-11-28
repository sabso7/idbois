import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import MasonryWall from '@yeger/vue-masonry-wall'
import { Vue3Mq } from "vue3-mq";

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(Vue3Mq ,{
    preset: 'bootstrap5'
  })
  .use(MasonryWall)
  .mount('#app')
