import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Explore from './views/Explore.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import NotFound from './views/NotFound.vue'
import './style.css'
import { language, t } from './data/i18n.js'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(){ return {top: 0} },
  routes: [
    {path:'/',component:Home,meta:{title:'Início'}},
    {path:'/explorar',component:Explore,meta:{title:'Explorar projetos'}},
    {path:'/jogos',component:Explore,props:{initialCategory:'Mods'},meta:{title:'Jogos & Mods'}},
    {path:'/projeto/:slug',component:ProjectDetail,meta:{title:'Projeto'}},
    {path:'/sobre',component:About,meta:{title:'Sobre'}},
    {path:'/portfolio',component:Portfolio,meta:{title:'Portfólio'}},
    {path:'/:pathMatch(.*)*',component:NotFound,meta:{title:'Página não encontrada'}}
  ]
})
router.afterEach(to=>{document.title = `${to.params.slug || t('projects')} · Arvak Labs`})
createApp(App).use(router).mount('#app')
