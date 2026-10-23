<script setup>
import { ref,computed,watch } from 'vue'
import { useRoute } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import {projects} from '../data/projects.js'
import {categories,statuses} from '../data/site.js'
const props=defineProps({initialCategory:{type:String,default:''}})
const route=useRoute()
const query=ref(''),category=ref(props.initialCategory || route.query.categoria || ''),status=ref(''),sort=ref('recentes')
watch(()=>[props.initialCategory,route.query.categoria],()=>{category.value=props.initialCategory||route.query.categoria||''})
const results=computed(()=>{
  const q=query.value.toLocaleLowerCase('pt-BR').trim()
  return projects.filter(p=>(!category.value||p.categories.includes(category.value))&&(!status.value||p.status===status.value)&&(!q||[p.name,p.short,p.description,...p.categories,...(p.technologies||[])].join(' ').toLocaleLowerCase('pt-BR').includes(q))).sort((a,b)=>sort.value==='nome'?a.name.localeCompare(b.name,'pt-BR'):(b.updated||'').localeCompare(a.updated||''))
})
function reset(){query.value='';category.value='';status.value='';sort.value='recentes'}
</script>
<template>
  <section class="container listing-page"><div class="page-heading"><span class="overline">ARQUIVO DE EXPERIMENTOS</span><h1>Explorar projetos<span class="accent">.</span></h1><p>Ideias, utilidades e experiências construídas com curiosidade.</p></div>
    <div class="filter-panel"><label class="search-field"><span class="visually-hidden">Buscar projetos</span><span aria-hidden="true">⌕</span><input v-model="query" type="search" placeholder="Busque por nome, tecnologia ou ideia..."></label><div class="filter-row"><label>Categoria <select v-model="category"><option value="">Todas</option><option v-for="c in categories" :key="c">{{c}}</option></select></label><label>Status <select v-model="status"><option value="">Todos</option><option v-for="s in statuses" :key="s">{{s}}</option></select></label><label>Ordenar <select v-model="sort"><option value="recentes">Atualização recente</option><option value="nome">Nome A–Z</option></select></label></div></div>
    <div class="results-line"><span>{{results.length}} {{results.length===1?'projeto encontrado':'projetos encontrados'}}</span><span class="results-decoration" aria-hidden="true">◆ ◆ ◆</span></div>
    <div v-if="results.length" class="project-grid"><ProjectCard v-for="p in results" :key="p.id" :project="p" /></div><div v-else class="empty-state"><div>⌕</div><h2>Nenhum projeto encontrado.</h2><p>Tente outro termo ou remova alguns filtros.</p><button class="button secondary" @click="reset">Limpar filtros</button></div>
  </section>
</template>
