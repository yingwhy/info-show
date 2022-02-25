import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import 'element-plus/dist/index.css'
import { components, plugins } from '@/plugins/elplus'

const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})

app.use(store).use(router).mount('#app')
