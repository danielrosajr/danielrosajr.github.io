<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { site } from './data/site.js'
const saved = (()=>{try{return localStorage.getItem('arvak-theme')}catch{return null}})()
const theme = ref(saved === 'light' || saved === 'dark' ? saved : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
const menuOpen = ref(false)
const route = useRoute()
watch(theme,v=>{document.documentElement.dataset.theme=v;try{localStorage.setItem('arvak-theme',v)}catch{}},{immediate:true})
watch(()=>route.fullPath,()=>{menuOpen.value=false})
</script>
<template>
  <div class="site-shell">
    <a href="#main" class="skip-link">Pular para o conteúdo</a>
    <header class="site-header"><div class="container header-inner">
      <RouterLink class="brand" to="/" aria-label="Arvak Labs, página inicial"><span class="brand-glyph" aria-hidden="true">A<span>✦</span></span><span>ARVAK <b>LABS</b><small>INDEPENDENT DIGITAL STUDIO</small></span></RouterLink>
      <nav :class="['nav',{'nav-open':menuOpen}]" id="main-nav" aria-label="Navegação principal"><RouterLink to="/">Início</RouterLink><RouterLink to="/explorar">Explorar</RouterLink><RouterLink to="/jogos">Jogos & Mods</RouterLink><RouterLink to="/sobre">Sobre</RouterLink><RouterLink to="/portfolio">Portfólio</RouterLink><a :href="site.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav>
      <div class="header-tools"><button class="icon-btn" type="button" @click="theme=theme==='dark'?'light':'dark'" :aria-label="theme==='dark'?'Ativar tema claro':'Ativar tema escuro'">{{theme==='dark'?'☀':'☾'}}</button><button class="icon-btn menu-button" type="button" :aria-expanded="menuOpen" aria-controls="main-nav" @click="menuOpen=!menuOpen" aria-label="Abrir ou fechar menu">{{menuOpen?'✕':'☰'}}</button></div>
    </div></header>
    <main id="main"><RouterView /></main>
    <footer class="site-footer"><div class="container footer-layout"><div><div class="footer-brand">ARVAK <b>LABS</b><span> ✦</span></div><p>Ideias que viram realidade. Um laboratório de produtos, código e experimentação.</p></div><div class="footer-links"><RouterLink to="/explorar">Projetos</RouterLink><RouterLink to="/sobre">Sobre</RouterLink><RouterLink to="/portfolio">Portfólio</RouterLink><a :href="site.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div><div class="container footer-bottom"><span>© {{new Date().getFullYear()}} Arvak Labs</span><span>Feito com curiosidade e código.</span></div></footer>
  </div>
</template>
