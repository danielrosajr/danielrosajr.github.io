<script setup>
import {ref,computed,watch} from 'vue'
import {useRoute} from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import {projects} from '../data/projects.js'
import {categories,statuses} from '../data/site.js'
import {t,localized,labelCategory,labelStatus} from '../data/i18n.js'
const props=defineProps({initialCategory:{type:String,default:''}})
const route=useRoute()
const query=ref(''),category=ref(props.initialCategory||route.query.categoria||''),status=ref(''),sort=ref('recentes')
watch(()=>[props.initialCategory,route.query.categoria],()=>category.value=props.initialCategory||route.query.categoria||'')
const results=computed(()=>{const q=query.value.toLocaleLowerCase().trim();return projects.filter(p=>(!category.value||p.categories.includes(category.value))&&(!status.value||p.status===status.value)&&(!q||[p.name,localized(p,'short'),localized(p,'description'),...(Object.values(p.short||{})),...(Object.values(p.description||{})),...p.categories,...(p.technologies||[])].join(' ').toLocaleLowerCase().includes(q))).sort((a,b)=>sort.value==='nome'?a.name.localeCompare(b.name):(b.updated||'').localeCompare(a.updated||''))})
function reset(){query.value='';category.value='';status.value='';sort.value='recentes'}
</script>
<template><section class="container listing-page"><div class="page-heading"><span class="overline">{{t('archive')}}</span><h1>{{t('exploreTitle')}}<span class="accent">.</span></h1><p>{{t('exploreDesc')}}</p></div><div class="filter-panel"><label class="search-field"><span class="visually-hidden">{{t('search')}}</span><span aria-hidden="true">⌕</span><input v-model="query" type="search" :placeholder="t('search')"></label><div class="filter-row"><label>{{t('category')}} <select v-model="category"><option value="">{{t('allCategories')}}</option><option v-for="c in categories" :key="c" :value="c">{{labelCategory(c)}}</option></select></label><label>{{t('status')}} <select v-model="status"><option value="">{{t('allStatuses')}}</option><option v-for="s in statuses" :key="s" :value="s">{{labelStatus(s)}}</option></select></label><label>{{t('sort')}} <select v-model="sort"><option value="recentes">{{t('recent')}}</option><option value="nome">{{t('nameAZ')}}</option></select></label></div></div><div class="results-line"><span>{{results.length}} {{t(results.length===1?'foundOne':'found')}}</span><span class="results-decoration" aria-hidden="true">◆ ◆ ◆</span></div><div v-if="results.length" class="project-grid"><ProjectCard v-for="p in results" :key="p.id" :project="p"/></div><div v-else class="empty-state"><div>⌕</div><h2>{{t('empty')}}</h2><p>{{t('emptyDesc')}}</p><button class="button secondary" @click="reset">{{t('clear')}}</button></div></section></template>
